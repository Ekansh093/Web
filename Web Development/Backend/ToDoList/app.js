
const express = require("express");
const bodyParser = require("body-parser");
const common = require(__dirname + "/common.js");
const mongoose = require("mongoose");
const _ = require("lodash");

//mongoose.connect("mongodb://localhost:27017/toDoList", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
mongoose.connect("mongodb+srv://admin-ekansh:Test@123@cluster0.w66qd.mongodb.net/toDoList?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })


const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const itemSchema = new mongoose.Schema({
  name: String
});

const items = mongoose.model("items", itemSchema);

const defaultItems = [
  {
    name:"Enter an item in your list."
  },
  {
    name:"<--Select checkbox to done."
  }
];

const listSchema = {
  name: String,
  items: [itemSchema]
};

const lists = mongoose.model("lists",listSchema);


app.get("/",(req,res) => {

  items.find(function(err,foundList){
    if(!err && foundList.length===0){
      items.insertMany(defaultItems,function(err){
        if(!err){
          res.redirect("/");
        }
      });
    }else{
      res.render("index", {typeOfList: "Today", newListItemsData: foundList});
    }
  });
});

app.post("/", (req,res)=> {
  var newItem = req.body.newItem;
  var listName = req.body.list;
  console.log(req.body);
  const item = new items({
    name: newItem
  });

  if(listName == "Today"){
    item.save();
    res.redirect("/");
  }else{
    lists.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
  }


});


app.post("/delete",function(req, res){
  const itemId = req.body.itemId;
  const listName = req.body.list;
  items.findByIdAndRemove(itemId, function(err){
    if(listName=="Today"){
      res.redirect("/");
    }else{
      lists.findOneAndUpdate({name: listName},{$pull: {items: {_id: itemId}}},function(err, foundList){
        res.redirect("/" + listName);
      });
    }
  });
});



app.get("/:listName",(req,res) => {

  const listName = _.capitalize(req.params.listName);

  lists.findOne({name:listName}, function(err, foundList){
    if(foundList==null){
      const list = new lists({
        name: listName,
        items: defaultItems
      });
      list.save();
      res.redirect("/"+listName);
    }else{
      console.log(foundList.items);
      res.render("index",{typeOfList: foundList.name, newListItemsData: foundList.items});
    }

  });

});


app.listen(3000,() => {
  console.log("Server is started on port 3000...");
});


//admin-ekansh
//Test@123

// mongo "mongodb+srv://cluster0.w66qd.mongodb.net/<dbname>" --username admin-ekansh
