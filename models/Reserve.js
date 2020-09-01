const mongoose = require("mongoose");

const ReserveSchema = new mongoose.Schema({
  id: String,
  username: String,
  email: String,

  mobile: String,
  grade: String,
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
  from: String,
  stype: String, //공간타입 NP, NB
  room: {
    type: Number,
    default: 0, // 방번호 0 이면 미배정인 상태
  },
  otype: [String], // 옵션 종류
  ocount: [Number], // 옵션 갯수
});

module.exports = mongoose.model("Reserves", ReserveSchema);
