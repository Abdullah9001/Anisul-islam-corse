const { log } = require("console");
const fs = require("fs");

fs.exists("demo2.text", (result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found");
  }
});
