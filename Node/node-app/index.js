const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT;

const handleReadFile = (fileName, statusCode, res) => {
  const filePath = path.join(__dirname, fileName);

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.writeHead(500, {
        "Content-Type": "text/plain",
      });
      res.end("Internal Server Error");
    } else {
      res.writeHead(statusCode, {
        "Content-Type": "text/html",
      });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("index.html", 200, res);
  } else if (req.url === "/about") {
    handleReadFile("about.html", 200, res);
  } else if (req.url === "/contact") {
    handleReadFile("contact.html", 200, res);
  } else {
    handleReadFile("404.html", 404, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
