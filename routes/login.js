var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

const User = require("../models/User");

router.get("/", function (req, res) {
  let session = req.session;

  res.render("login", { session: session });
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
        res.cookie("user", checkData.id, {
          expires: new Date(Date.now() +  60*60*100*100),
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
        
        res.render("login", { session: session });
      } else {
        res.render("login", { message: "로그인이 실패하였습니다" });
      }
    }
  } catch (err) {
    res.render("login", { message: "로그인이 실패하였습니다" });
  }
});

module.exports = router;
