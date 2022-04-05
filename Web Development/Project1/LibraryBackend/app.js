
require("dotenv").config();
const express = require("express");
const db = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;


db.connect(process.env.DB_URL,{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

//initializa app
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

const reg = require("./routes/auth/register");
reg.register(app,db);


require("./routes/auth/login")(app,db);
require("./routes/auth/logout")(app);
require("./routes/main/about")(app);
require("./routes/main/contactUs")(app);
require("./routes/main/home")(app);




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
