const http = require("http");
const port = 3000;
const hostname = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });

  res.write("<h1>hello</h1>");

  res.end();
});
myServer.listen(port, () => {
  console.log(`server in running successfully at http://${hostname}:${port}`);
});
