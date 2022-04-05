
require("dotenv").config();
const passport = require("passport");

let User = null;

let register = function (app,db){

  createSession(app);
  initializePassport(app);
  User = createUserCollectionInstance(db);
  passport.use(User.createStrategy());
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());


  app.route("/auth/register")

    .get(function(req, res){
      const data = {message: "Success"};
      res.json(data);
    })

    .post(function(req,res){
      console.log(req.body);
      const username = req.body.username;
      const password = req.body.password;

      User.register({username: username}, password, function(err, user){
        if(err){
          console.log(err);
          const data= {
            message: "Error while registering user",
            status: "Failure",
            statusCode: 4001
          };
          res.json(data);
        }else{
          passport.authenticate("local")(req, res, function(){
            console.log(req.user);
            const data= {
              message: "User is successfully registered",
              status: "Success",
              statusCode: 1001,
              username: req.user.username,
              userId: req.user.id
            };
            res.json(data);
          });
        }
      });
    });
};


function createSession(app){
  const session = require("express-session");
  app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
  }));
}

function initializePassport(app){
  app.use(passport.initialize());
  app.use(passport.session());
}

function createUserCollectionInstance(db){
  const passportLocalMongoose = require("passport-local-mongoose");
  userSchema = createUserSchema(db);
  userSchema.plugin(passportLocalMongoose);
  User = db.model("users", userSchema);
  return User;
}

function createUserSchema(db){
  return new db.Schema({
    username: String,
    password: String
  });
}

let getUser = function (username, password, db){
  const userObj = new User({
    username: username,
    password: password
  });
  return userObj;
}


module.exports = {
  register,
  getUser
};
