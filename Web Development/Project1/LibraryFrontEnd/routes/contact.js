
module.exports = function(app){

  app.route("/contact")

    .get(function(req, res){

      res.render("home");

    });
}
