
const mod = require("./register");
const passport = require("passport");

module.exports = function(app, db){

  app.route("/auth/login")

    .post((req,res) => {
      const user = mod.getUser(req.body.username, req.body.password, db);

      req.login(user, function(err){
        if(err){
          const data = {
            message: "User is not logged in."
          };
          res.json(data);
          console.log(err);
        }else{
          passport.authenticate("local")(req, res, function(){
            const data = {
              message: "User is logged in successfully"
            };
            res.json(data);
          });
        }
      });
    });
}
