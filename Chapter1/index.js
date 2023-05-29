const http = require("http");

const moduleCustom = require("./modules");
const { onRequest } = require("./modules/helper");

const server = http.createServer(onRequest);

server.listen(moduleCustom.port, moduleCustom.hostname, () => {
  console.log(
    `Server running at http://${moduleCustom.hostname}:${moduleCustom.port}/`
  );
});
