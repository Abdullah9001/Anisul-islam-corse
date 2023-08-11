const http = require("http");
const fs = require("fs");
const PORT = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const handltReadFile = (statusCode, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(statusCode, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  if (req.url === "/") {
    handltReadFile(200, "./views/index.html");
  } else if (req.url === "/about") {
    handltReadFile(200, "./views/about.html");
  } else if (req.url === "/contact") {
    handltReadFile(200, "./views/contact.html");
  } else {
    handltReadFile(404, "./views/error.html");
  }
});

server.listen(PORT, hostName, () => {
  console.log(`server is running at http://${hostName}:${PORT}`);
});
