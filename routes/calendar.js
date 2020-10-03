const express = require("express");
const router = express.Router();
const Reserve = require("../models/Reserve");
const processor = require("../logic/processor");

const adminlogic = require("../logic/adminlogic");
const mongoose = require("mongoose");
const google = require("../logic/google-calendar");
const mailer = require("../logic/mailer");

//route
router.get("/", async (req, res) => {
  var base = process.cwd();

  var file = base + "/public/html/calendar-checker.html";

  res.sendFile(file);
});

router.post("/checkprice", async (req, res) => {

  let checkData = req.body;
  var r = processor.completeData(checkData);
  var price = processor.calcuratePriceV2(r);
  let resData = r;
  r.price = price;
  res.json(resData);
});

router.post("/checkpossible", async (req, res) => {
  
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



router.post("/price_calcurate", async (req, res) => {
  
  let checkData = req.body;
  var r = processor.completeData(checkData);

  var price = processor.calcuratePriceV2(r);
  r.price = price;

  res.json(r);
});


router.post("/admin", async (req, res) => {
  
  let rawData = req.body.rtext;
  
  var data = await adminlogic.splitData(rawData);

  // data.result = "aa";
  res.json(data);

});


router.post("/request", async (req, res) => {
  
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


  let query = req.query;

  let checkData = req.body;

  console.log("--------------------------queryv-----------------------------");
  console.log(checkData.v);
  var r = processor.completeData(checkData);
  var price = processor.calcuratePriceV2(r);

  console.log("------------------rrrrrrrrrrrrrrr");

  console.log(r.enddate);
  let resData = r;
  r.price = price;

  if (user == {}) {
    r.possible = "NO";
    r.reason = "로그인해주세요";
  }

  var userObj = req.cookies.userObj;

  console.log(userObj);

  if(userObj && userObj.grade) {
    grade = userObj.grade;
    
  }

  //자율사용자
  if (grade == "pass") {
    var id = userObj.id;

    var nowString = new Date().toISOString();

    const nextReserve = await Reserve.findOne({id: id, end: {$gte: nowString}}, {}  );

    console.log('------------next reserve ');
    console.log(nowString);
    console.log(nextReserve);


  
    // try {
    //   const reserve = await Reserve.findOne( {mobile: mobile} ,{}, { sort: { 'creationDate' : -1 } });
  
    
    // } catch (e) {
    // }

    //자율사용자는 한개씩 예약할수 있게 변경
  }


  if (r.possible == "NO") {
    res.json(r);
  } else {
    try {
      google.listUpcomingEvent(r, async (err, data) => {
        if (data.possible != "NO") {
          data.possible = "OK";
          data.user = user;
          data.room = Number.parseInt(data.rn_sw);

          let r = Math.random().toString(36).substring(7);
          console.log("random", r);

          data.rid = data.user.id + r;
          var savedData = await insertReserve(data);

          // res.json(data);
          
          google.makeEvent(data, (err, data) => {
            res.json(data);
          });
        } else {
          res.json(data);
        }
      });
    }catch(e){
      res.json(r);
    }
   
  }
});

async function insertReserve(data) {

  console.log('----------insertReserve-------------------------')
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
    rawData: data,
    rtext: data.rtext,
  };
  var reserve = new Reserve(preparedData);

  try {
    const savedData = await reserve.save();

    console.log("-----------------------------saved reserve -------------------");
    
    return savedData;
  } catch (e) {
    console.log('---------------------');
    console.log(e);
    return data;
  }
}



router.post("/request2", async (req, res) => {
  console.log(
    "-----------------------is admin-----grade grade---------------------"
  );


  let reqData = req.body;

  const rid = reqData.rid;

  var ObjectId = mongoose.Types.ObjectId;

  try {
    const reserve = await Reserve.findOne( {_id : ObjectId(rid)});


    var data = reserve.rawData;

    google.insertEvent(data, (err, data) => {
      res.json(data);
    });


  } catch (e) {
    res.json({message: "요청대기"});
  }

});
module.exports = router;
