const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.send("<h1>I am a get request at register route</h1>");
  res.end();
});
router.get("/login", (req, res) => {
  res.send("<h1>I am a get request at login route</h1>");
  res.end();
});

module.exports = router;
