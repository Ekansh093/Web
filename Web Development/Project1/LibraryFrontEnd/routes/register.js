
const com = require("./common");


module.exports = function(app){

  app.route("/register")

    .get(function(req, res){

      res.render("register");

    })

    .post(function(req, res){
      const username = req.body.username;
      const password = req.body.password;

      const data = {
        username: username,
        password: password
      };

      const jsonData = com.querystring.stringify(data);

      const options = {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      };

      const url = com.url + "/auth/register";
      console.log(url);
      console.log(jsonData);

      const request = com.http.request(url, options, (response) => {
        console.log(response.statusCode);
        if(response.statusCode === 100){
          res.redirect("/");
        }else{
          res.redirect("/register");
        }
        response.on('data', (data) => {

          console.log(JSON.parse(data));
        });
      });

      request.write(jsonData);
      request.end();


    });
}
