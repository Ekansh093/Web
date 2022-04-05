

require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

//const bcrypt = require('bcrypt');
//const saltRounds = 10;

//const md5 = require('md5');
//const encrypt = require('mongoose-encryption');

const app = express();

app.use(session({
  secret: "Our little secret.",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/userDB",{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

//userSchema.plugin(encrypt, {secret: process.env.SECRETKEY, encryptedFields: ["password"]});

const User = mongoose.model("users",userSchema);


passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req,res){
  if(req.isAuthenticated()){
    res.redirect("/secrets");
  }else{
    res.render("home");
  }
});

app.get("/login", function(req,res){
  res.render("login");
});

app.get("/register", function(req,res){
  res.render("register");
});

app.get("/secrets", function(req, res){
  if(req.isAuthenticated()){
    res.render("secrets");
  }else{
    res.redirect("/login");
  }
});

app.post("/register", function(req, res){

  User.register({username: req.body.username}, req.body.password, function(err, user){
    if(err){
      console.log(err);
      res.redirect("/register");
    }else{
      passport.authenticate("local")(req,res, function(){
        res.redirect("/secrets");
      });
    }
  });
});

app.post("/login", function(req, res){

  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username: username,
    password: password
  });

  req.login(user, function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req, res, function(){
        console.log(req.user);
        res.redirect("/secrets");
      })
    }
  });
});


app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});


///////////////////////////////////// bcrypt ////////////////////////////////////////////


// app.post("/register", function(req, res){
//
//   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//     const user = new users({
//       username: req.body.username,
//       password: hash
//     });
//
//     user.save(function(err){
//       if(err){
//         console.log(err);
//       }else{
//         res.render("secrets");
//       }
//     });
//   });
// });
//
// app.post("/login", function(req, res){
//   const username = req.body.username;
//   const password = req.body.password;
//
//   users.findOne({username: username}, function(err, foundList){
//     if(err){
//       console.log(err);
//     }else{
//       if(foundList){
//         bcrypt.compare(password, foundList.password, function(err, result) {
//           if(result === true){
//             res.render("secrets");
//           }
//         });
//       }
//     }
//   });
// });

/////////////////////////////////////////////////////////////////////////////////////////


app.listen(3000, function(){
  console.log("App is running on port 3000");
});
