var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

const User = require("../models/User");

router.get("/", function (req, res) {
  let session = req.session;

  res.render("login", { session: session, cookies: req.cookies });
});

router.get("/fail", function (req, res) {
  var base = process.cwd();
  var file = base + "/public/html/loginfail.html";

  res.sendFile(file);
});

router.post("/", async function (req, res) {
  
  let checkData = req.body;

  try {
    const user = await User.findOne({
      id: checkData.id,
    });

    if (!user) {
      res.json({ result: "NOUSER" });
    } else {
      if (user.password == checkData.pw) {
        //로그인 완료

        var userObj = {
          id: user.id,
          mobile: user.mobile,
          username: user.username,
          grade: user.grade,
          email: user.email
        }

        var expiryDate = new Date( Date.now() + 60 * 60 * 1000 * 24 * 7); // 24 hour 7일

        res.cookie("userObj", userObj,   {
          expires: expiryDate,
          httpOnly: true,
        });
        req.session.user = {
          id: user.id,
          mobile: user.mobile,
          username: user.username,
          grade: user.grade,
          email: user.email,
        };

        let session = req.session;

        let cookies = {userObj: userObj};
        res.render("login", { cookies: cookies });


        // let loginObj = {
        //   id: user.id,
        //   mobile: user.mobile,
        //   username: user.username
        // }


        // console.log("=======================================cookie test");
        // res.cookie('loginObj', loginObj, { expires: expiryDate, httpOnly: true, signed:true });

      } else {
        res.render("login", { cookies: req.cookies, message: "로그인이 실패하였습니다" });
      }
    }
  } catch (err) {
    res.render("login", {  cookies: req.cookies, message: "로그인이 실패하였습니다" });
  }
});

module.exports = router;
