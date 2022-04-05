
module.exports = function(app){

  app.route("/auth/logout")

    .get(function(req,res){
      req.logout();
      const data = {
        message: "User is successfully logged out"
      };
      res.json(data);
    });

}
