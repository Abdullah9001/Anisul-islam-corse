const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("I am a get request at home route");
  res.end();
});
app.get("/register", (req, res) => {
  res.send("I am a get request at refister route");
  res.end();
});
app.get("/login", (req, res) => {
  res.send("I am a get request at login route");
  res.end();
});

module.exports = app;
