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
  console.log("-------- get login -----------");
  var base = process.cwd();
  var file = base + "/public/html/loginfail.html";

  res.sendFile(file);
});

router.post("/", async function (req, res) {
  console.log("-------- post login -----------");

  let checkData = req.body;

  console.log("---------------------------");
  console.log(checkData);

  console.log("-----------------body-----------------");

  try {
    const user = await User.findOne({
      id: checkData.id,
    });

    console.log("------------------ user ------------");
    console.log(user);
    // let hashPassword = crypto.createHash("sha512").update() "";

    if (!user) {
      res.json({ result: "NOUSER" });
    } else {
      console.log("-----------------------------user has");
      console.log(user.password);
      console.log(checkData.pw);
      if (user.password == checkData.pw) {
        console.log(" this is login ------------ complete ");
        //로그인 완료
        res.cookie("user", checkData.id, {
          expires: new Date(Date.now() + 900000),
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
        console.log("---------------------------------------com");
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
