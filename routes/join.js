var express = require("express");
var app = express();
var router = express.Router();
var path = require("path");

// var mysql = require('mysql')

// DATABASE SETTING (Google Cloud SQL)
// var connection = mysql.createConnection({
//     host     : '35.189.176.97',
//     port     : 3306,
//     user     : 'root',
//     password : 'root',
//     database : 'jsman'
// });

router.get("/", function (req, res, next) {
  res.render("join", {});
});

module.exports = router;
