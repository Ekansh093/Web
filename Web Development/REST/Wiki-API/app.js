
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB",{ useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const articlesSchema = new mongoose.Schema({
  title: String,
  content: String
});

const articles = mongoose.model("articles", articlesSchema);


app.route("/articles")

.get(function(req, res){
  articles.find(function(err, foundList){
    if(!err){
      res.send(foundList);
    }else{
      res.send(err);
    }
  });
})

.post(function(req, res){
  const newArticle = new articles({
    title: req.body.title,
    content: req.body.content
  });

  newArticle.save(function(err){
    if(!err){
      res.send("{message: \"Article is successfully saved.\"}");
    }else{
      res.send(err);
    }
  });
})

.delete(function(req, res){

  articles.deleteMany(function(err){
    if(!err){
      res.send("Successfully deleted");
    }else{
      res.send(err);
    }
  });
});


app.route("/articles/:articleTitle")

  .get(function(req, res){
    articles.findOne({title: req.params.articleTitle}, function(err, foundArticle){
      if(foundArticle){
        res.send(foundArticle);
      }else{
        res.send("Not found!!");
      }
    })

  })

  .put(function(req, res){

    articles.update(
      {title: req.params.articleTitle},
      {title: req.body.title, content: req.body.content},
      {overwrite: true},
      function(err){
        if(!err){
          res.send("Successfully updated");
        }else{
          res.send(err);
        }
    });

  })

  .patch(function(req, res){

    articles.update(
      {title: req.params.articleTitle},
      {$set: req.body},
      function(err){
        if(!err){
          res.send("Successfully updated");
        }else{
          console.log(err);
        }
      });

  })

  .delete(function(req, res){

    articles.deleteOne(
      {title: req.params.articleTitle},
      function(err){
        if(!err){
          res.send("Successfully deleted");
        }else{
          res.send(err);
        }
      });

  });


app.listen(3000, function(){
  console.log("App is running on port 3000");
});
