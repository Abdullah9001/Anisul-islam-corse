const express = require("express");
const app = express();

const useRouter = require("./routes/users.route");

app.use("/api/user", useRouter);

app.use("/", (req, res) => {
  res.send("<h1>I am a get request at home route</h1>");
  res.end();
});
app.use((req, res) => {
  res.send("<h1>404 !! not found</h1>");
  res.end();
});

module.exports = app;
