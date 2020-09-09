const express = require("express");
const router = express.Router();
const User = require("../models/User");
const processor = require("../logic/processor");

const mailer = require("../logic/mailer");

//route
router.get("/logout", async (req, res) => {
  req.session.user = {};

  let session = req.session;

  res.render("logout", { session: session });
});

//route
router.get("/findid", async (req, res) => {
  req.session.user = {};

  let session = req.session;

  res.render("logout", { session: session });
});

//route
router.get("/findpw", async (req, res) => {
  req.session.user = {};

  let session = req.session;

  res.render("logout", { session: session });
});

//route
router.post("/join", async (req, res) => {
  let rawData = req.body;
  var data = new User({
    id: rawData.id,
    username: rawData.userName,
    password: rawData.pw1,
    email: rawData.email,
    mobile: rawData.mobile,
    gender: rawData.gender,
    address: rawData.address,
    grade: "new",
    birthday: rawData.yy + rawData.mm + rawData.dd,
  });

  try {
    //유저가 있으면
  } catch (err) {
    res.json({ result: "ERR" });
  }

  try {
    const user = await User.find({
      id: rawData.id,
    });

    if (user.length > 0) {
      res.json({ result: "EXIST" });
    } else {
      const saveData = await data.save();
      var mailData = {
        title: "가입완료 | " + data.username + " | " + data.mobile + " | " + data.id  + " | " + data.address,
        rawData: rawData,
        data: data,
        saveData: saveData,
      };
      mailer.mailSend(mailData);
      res.json({ result: "OK" });
    }
  } catch (err) {
    var mailData = {
      title: "가입실패 | " + data.username + " | " + data.mobile + " | " + data.id  + " | " + data.address,
      rawData: rawData,
      data: data,
    };
    mailer.mailSend(mailData);
    res.json({ result: "FAIL" });
  }
});

//route
router.post("/login", async (req, res) => {
  var mailData = {
    title: "로그인시도",
    data: JSON.stringify(req),
  };
  mailer.mailSend(mailData);

  res.json(mailData);

  // } else {
  //   res.json({ message: "변경 요청은 카톡으로 해주세요" });
  // }
});

//route
router.get("/kakaologin", async (req, res) => {
  var base = process.cwd();
  var file = base + "/public/html/loginpage.html";

  res.sendFile(file);

  // } else {
  //   res.json({ message: "변경 요청은 카톡으로 해주세요" });
  // }
});

//route
router.get("/kakaoauth", async (req, res) => {
  //kakao rest api key
  //원스보컬 비즈 계정으로 키 발급
  var key = "a4fa67a4b73f76e5ded936e8ce2d6937";

  var base = process.cwd();
  var file = base + "/public/html/loginpage.html";

  res.sendFile(file);

  // } else {
  //   res.json({ message: "변경 요청은 카톡으로 해주세요" });
  // }
});

router.get("/loginpage", async (req, res) => {
  var base = process.cwd();
  var file = base + "/public/html/loginpage.html";

  res.sendFile(file);
});

module.exports = router;
