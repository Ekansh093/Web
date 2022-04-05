
const express = require("express");
const https = require("https");
const port = 3000;

const app = express();

app.get("/", (req, res) => {

  const url = "https://reqres.in/api/users/2";

  https.get(url, (response) => {
  //  console.log(response.statusCode);
    response.on('data', (data) => {
      const apiData = JSON.parse(data);
      let email = apiData.data.email;
      let firstName = apiData.data.first_name;
      res.write("<h1>"+email+"</h1>");
      res.write("<p>"+firstName+"</p>");
      res.send();
    });
  });

});

app.listen(port,() => {
  console.log(`App started on port ${port}`);
});
