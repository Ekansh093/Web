
const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.get("/",(req, res) => {
  res.sendFile(__dirname + "/index.html");
  //console.log(req);
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;
  res.send("Result= "+ result);

});

app.listen(3000, function(){
  console.log(`Server started on port ${port}...`);
});
