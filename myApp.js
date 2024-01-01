require('dotenv').config()
const express = require("express");
const app = express();
const path = require("path");

const indexPath = path.join(__dirname, "views", "index.html");
const assetsPath = path.join(__dirname, "public");

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

// Serving static files from the 'public' directory
app.use("/public", express.static(assetsPath));
module.exports = app;




































module.exports = app;
