

const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const session = require("express-session");

const mongoose = require("mongoose");

require("dotenv/config");
const baseRoute = require("./routes/base");

const spaceRoute = require("./routes/space");

const mypageRoute = require("./routes/mypage");

const userRoute = require("./routes/user");

const joinRoute = require("./routes/join");
const loginRoute = require("./routes/login");

const calendarRoute = require("./routes/calendar");


app.set("view engine", "ejs");


app.use(
    session({
      key: "sid",
      secret: "secret",
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000, // 쿠키 유효시간 24시간
      },
    })
  );


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "1q2w3e4r",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cookieParser());



//connect to db
const connection = mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("connect to db");
    }
  );



  app.use("/", baseRoute);

  app.use("/space", spaceRoute);
  app.use("/user", userRoute);

  app.use("/join", joinRoute);
  app.use("/login", loginRoute);

  app.use("/calendar", calendarRoute);

  app.use("/mypage", mypageRoute);


app.use(express.static("public"));

console.log("listening  http://localhost:3000");
app.listen(3000);
