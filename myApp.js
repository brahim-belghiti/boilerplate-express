let express = require('express');
let app = express();
console.log("Hello World");
// app.get("/", function(req, res) {
//   res.send('Hello Express');
// }
// )
const filePath = __dirname + "/views/index.html";
app.get("/", function (req, res) {
  res.sendFile(filePath);
});





































 module.exports = app;
