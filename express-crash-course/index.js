const express = require("express");
const {engine} = require('express-handlebars');
const path = require("path");
const members = require('./Members')
// const logger = require("./middleware/logger");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(logger);

//
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Json request
app.use("/api/members", require("./routes/api/members"));

app.get('/', (req,res)=>{
  res.render('index', {
    title: "Members App",
    members
  })
})

//set Static
// app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at Port ${PORT}`);
});
