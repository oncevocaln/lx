const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.redirect(307, "/space/1");
});

module.exports = router;
