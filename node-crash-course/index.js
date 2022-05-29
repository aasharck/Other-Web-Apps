const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Hi World</h1>");
  } else{
      res.end("<h1>Other</h1>")
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on Port`, PORT);
});
