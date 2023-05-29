const fs = require("fs");
const url = require("url");
const pathUrl = require("path");

function render404(res, message = "File not found") {
  res.writeHead(404);
  res.write(message);
  res.end();
}
function showHtml(path, res) {
  let pathName = `../views${path === "/" ? "/home" : path}.html`;
  fs.readFile(pathUrl.resolve(__dirname, pathName), (err, data) => {
    if (err) {
      render404(res, "File not found: " + __dirname + pathName);
    } else {
      res.write(data);
    }
    res.end();
  });
}

function onRequest(req, res) {
  const path = url.parse(req.url).pathname;
  res.writeHead(200, { "Content-Type": "text/html" });
  showHtml(path, res);
}

module.exports = {
  render404,
  showHtml,
  onRequest,
};
