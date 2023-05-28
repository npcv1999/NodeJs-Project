const http = require("http");
const moduleCustom = require("./module");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World from Node.js!</h1>");
});

server.listen(moduleCustom.port, moduleCustom.hostname, () => {
  console.log(
    `Server running at http://${moduleCustom.hostname}:${moduleCustom.port}/`
  );
  moduleCustom.showNotify();
});
