
const mongoose  = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true, useNewUrlParser: true });

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 11,
  review: "Pretty solid as a fruit"
});

fruit.save();

Fruit.find(function(err, fruits){
  if(err){
    console.log(err);
  }else{
    mongoose.connection.close();
    console.log(fruits);
  }
});


const peopleSchema = new mongoose.Schema({
  name: "String",
  age: Number
});

const person = mongoose.model("person",peopleSchema);

const person1 = new person({
  name: "John",
  age: 37
});

//person1.save();
