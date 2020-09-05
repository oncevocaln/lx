const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  from: String,
  rno: String,
  username: String,
  mobile: String,

  start: {
    type: Date,
    default: Date.now,
  },
  end: {
    type: Date,
    default: Date.now,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  stype: String, //공간타입 NP, NB
  room: {
    type: Number,
    default: 0, // 방번호 0 이면 미배정인 상태
  },
  os: String,
  otype: [String], // 옵션 종류
  ocount: [Number], // 옵션 갯수

});



module.exports = mongoose.model("Requests", RequestSchema);
