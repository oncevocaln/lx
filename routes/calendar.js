const express = require("express");
const router = express.Router();
const Reserve = require("../models/Reserve");
const processor = require("../logic/processor");

const google = require("../logic/google-calendar");
const mailer = require("../logic/mailer");

//route
router.get("/", async (req, res) => {
  var base = process.cwd();

  var file = base + "/public/html/calendar-checker.html";

  res.sendFile(file);
});

router.post("/checkprice", async (req, res) => {
  console.log("-----------------------is admin");

  let checkData = req.body;
  var r = processor.completeData(checkData);
  var price = processor.calcuratePriceV2(r);
  let resData = r;
  r.price = price;
  res.json(resData);
});

router.post("/checkpossible", async (req, res) => {
  console.log("-----------------------is admin");

  let checkData = req.body;
  var r = processor.completeData(checkData);

  var price = processor.calcuratePriceV2(r);
  r.price = price;
  if (r.possible == "NO") {
    res.json(r);
  } else {
    google.listUpcomingEvent(r, (err, data) => {
      if (data.possible != "NO") {
        data.possible = "OK";
      }
      console.log("---------------------google-- res-----------------");
      res.json(data);
    });
  }
});

router.post("/request", async (req, res) => {
  console.log(
    "-----------------------is admin-----grade grade---------------------"
  );

  var preparedData = {};

  console.log(req.session);
  let session = req.session;
  //로그인 안된 상태의 등급
  let grade = "no";
  let user = {};

  if (session && session.user && session.user.grade) {
    user = session.user;
    grade = session.user.grade;
  }

  console.log(grade);

  let query = req.query;

  console.log(query);
  let checkData = req.body;

  console.log("--------------------------queryv-----------------------------");
  console.log(checkData.v);
  var r = processor.completeData(checkData);
  var price = processor.calcuratePriceV2(r);

  console.log("------------------rrrrrrrrrrrrrrr");

  console.log(r.enddate);
  let resData = r;
  r.price = price;

  if (grade == "no" || grade == "new") {
    r.possible = "NO";
    r.reason = "제한된 기능입니다. 로그인하시거나 카톡보내기를 이용해주세요";
  }

  if (r.possible == "NO") {
    res.json(r);
  } else {

    try {

      google.listUpcomingEvent(r, async (err, data) => {
        if (data.possible != "NO") {
          data.possible = "OK";
  
          data.user = user;
          data.room = data.rn_sw;
  
          console.log(data.start);
          console.log(data.end);
  
          //자율사용자
          if (grade == "pass") {
            //자율사용자는 한개씩 예약할수 있게 변경
          }
          var savedData = await insertReserve(data);
  
          google.insertEvent(data, (err, data) => {
            console.log('-----------------insert event r')
            res.json(data);
          });
        } else {
          console.log('-----------------insert event x')
          res.json(data);
        }
      });
    }catch(e){

      res.json(r);

    }
   
  }
});

async function insertReserve(data) {
  var preparedData = {
    id: data.user.id,
    username: data.username,
    email: data.email,
    mobile: data.mobile,
    grade: data.grade,
    start: new Date(data.startdate),
    end: new Date(data.enddate),
    from: data.from,
    stype: data.stype,
    room: data.room,
  };
  var reserve = new Reserve(preparedData);

  try {
    const savedData = await reserve.save();

    console.log("-----------------------------saved reserve ");
    
    return savedData;
  } catch (e) {
    return data;
  }
}

module.exports = router;
