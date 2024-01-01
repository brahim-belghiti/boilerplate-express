require('dotenv').config()
const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const path = require("path");

const indexPath = path.join(__dirname, "views", "index.html");
const assetsPath = path.join(__dirname, "public");

app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next)=>{
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
})

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

app.get("/json", (req, res) => {
  switch (process.env.MESSAGE_STYLE) {
    case "uppercase":
      res.json({
        message: "HELLO JSON"
      })
      break;
    default:
      res.json({
        message: "Hello json"
      })
  }


})

app.get('/now', function (req, res, next) {
  req.time = new Date().toString();  // Hypothetical synchronous operation
  next();
}, function (req, res) {
  res.json({time:req.time});
});

app.get('/:word/echo', (req, res) => {
  const word = req.params.word;
  res.json({ echo: word });
});


app.route('/name').get((req, res)=>{
  const { first, last } = req.query;
  const fullName = `${first} ${last}`;
  res.json({ name: fullName });
}).post((req,res)=>{
  const { first, last } = req.body;
  const fullName = `${first} ${last}`;
  res.json({ name: fullName });
})
// Serving static files from the 'public' directory
app.use("/public", express.static(assetsPath));
module.exports = app;




































module.exports = app;
