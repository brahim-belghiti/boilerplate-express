const express = require("express");
const app = express();
const path = require("path");

const indexPath = path.join(__dirname, "views", "index.html");
const assetsPath = path.join(__dirname, "public");

app.get("/", (req, res) => {
  res.sendFile(indexPath);
});

// Serving static files from the 'public' directory
app.use("/public", express.static(assetsPath));
module.exports = app;




































 module.exports = app;
