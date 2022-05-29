const express = require("express");
const members = require("./Members");
const path = require("path");
// const logger = require("./middleware/logger");

const app = express();


// app.use(logger);

//Json request
app.get("/api/members", (req, res) => {
  res.json(members);
});

//set Static
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
});
