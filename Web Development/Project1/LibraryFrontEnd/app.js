const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

require("./routes/home")(app);
require("./routes/about")(app);
require("./routes/contact")(app);
require("./routes/register")(app);



app.listen(5000, function(){
  console.log("App started on port 5000");
});
