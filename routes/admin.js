const express = require("express");

const gc = require("../logic/google-calendar");

const Reserve = require("../models/Reserve");

const mongoose = require("mongoose");
const router = express.Router();

router.get("/1", function (req, res, next) {


});

  
router.get("/2", function (req, res, next) {
    res.render("admin", { session: req.session });

});

  



module.exports = router;
