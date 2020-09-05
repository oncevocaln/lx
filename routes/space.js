const express = require("express");

const gc = require("../logic/google-calendar");

const Reserve = require("../models/Reserve");

const mongoose = require("mongoose");
const router = express.Router();

const calendarIds = {
  NY: {
    id: "3v45ttcu6h58kho5vtibohf7g4@group.calendar.google.com",
    count: 1,
  },
  HA: {
    id: "iq83se4r2bk5g6t192faevn3oc@group.calendar.google.com",
    count: 1,
  },
  HD: {
    id: "2losj7uf7v1nqvrgos17jmbfgs@group.calendar.google.com",
    count: 1,
  },
  HM: {
    id: "1cji92facmh8jv5iv1d0ab5fa8@group.calendar.google.com",
    count: 4,
  },
  HP: {
    id: "2g2aafkknaic3hbhms2s9ioe0s@group.calendar.google.com",
    count: 3,
  },
  HR: {
    id: "tuhanmpfe7rp38o3sgjsihv25s@group.calendar.google.com",
    count: 1,
  },
  HS: {
    id: "nl95ks4jpidhh7u9na8i8u0o9o@group.calendar.google.com",
    count: 1,
  },
  HV: {
    id: "s7of71vt2vnkkoagvn36l564s8@group.calendar.google.com",
    count: 6,
  },
  HX: {
    id: "jafg35nd8mogipmmaqfu30nei4@group.calendar.google.com",
    count: 2,
  },
  NA: {
    id: "dhb4q9dnpqoq1k5pknvh6i3l78@group.calendar.google.com",
    count: 1,
  },
  NB: {
    id: "94pkff5ut7b75i72dpecna9p54@group.calendar.google.com",
    count: 2,
  },
  ND: {
    id: "n2jhd5rbhlu3k5fl77abojsef4@group.calendar.google.com",
    count: 2,
  },
  NM: {
    id: "bjgpl3ggs5mo4ca37ta5k1prc8@group.calendar.google.com",
    count: 3,
  },
  NP: {
    id: "kuiihiuag255j4jkp05u0odv8k@group.calendar.google.com",
    count: 8,
  },
  NV: {
    id: "35hmjijhbur05298sp2fpaptis@group.calendar.google.com",
    count: 5,
  },
  NX: {
    id: "mj2te6b290tkr2ttea3u93iepk@group.calendar.google.com",
    count: 2,
  },
  OP: {
    id: "6kbrfp74k5pu451vtj0sc206lg@group.calendar.google.com",
    count: 100,
  },
};

router.get("/1", function (req, res, next) {
  res.render("frame", { session: req.session });
});

router.get("/2/:mobile", async function (req, res, next) {
  var mobile = req.params.mobile;
  var id = "";
  var user = {};

  var ObjectId = mongoose.Types.ObjectId;

  try {
    const reserve = await Reserve.findOne( {mobile: mobile} ,{}, { sort: { 'creationDate' : -1 } });

    res.render("frame2", {
      session: req.session,
      user: user,
      reserve: reserve,
    });
  } catch (e) {
    res.render("frame2", { session: req.session });
  }


});

router.get("/1/:stype", function (req, res, next) {
  var stype = req.params.stype;

  stype = stype.toUpperCase();
  var cid = calendarIds[stype].id;

  res.render("calendar", {
    session: req.session,
    data: {
      cid: cid,
    },
  });
});

module.exports = router;
