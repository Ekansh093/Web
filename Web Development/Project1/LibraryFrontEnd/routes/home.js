
const com = require("./common");

module.exports = function(app){

  app.route("/")

    .get(function(req, res){
      const url = com.url+"/home";
      console.log(url);
      com.http.get(url, function(response){
        response.on('data', (data) => {
          const apiData = JSON.parse(data);
          console.log(apiData);
          res.render("home", apiData);
        });

      });
    });
}
