
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;


//for serving static files
app.use('/static', express.static('static'));

app.use(express.urlencoded());

//set the template engine as pug
app.set('view engine', 'pug');

//set the views directory
app.set('views', path.join(__dirname,'views'));

app.get("/",(req,res) => {
   res.status(200).render('index.pug');
 });

app.post("/",(req,res) => {
  console.log(req.body);
  name = req.body.name;
  age = req.body.age;
  address = req.body.address;
  content = `Name of client is ${name}, ${age} years old and address = ${address}`;
  fs.writeFileSync("clientContent.txt",content);
  const params = {"message" : "Your form has been submitted successfully"}
  res.status(200).render('index.pug', params);
 });




//Pug demo end point
// app.get("/demo",(req,res) => {
//   res.status(200).render('demo', {pageTitle: 'Pug Tutorial', message:'Hey!! This is PUG tutorial'});
// });
//
//
// app.get("/",(req,res) => {
//   res.send('This is home page of express tutorial');
// });
//
// app.get("/about",(req,res) => {
//   res.send('This is about page of express tutorial');
// });

app.listen(port,() =>{
  console.log(`App started on port ${port}`);
});
