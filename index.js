const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// create product schma

const productsSchema = new mongoose.Schema({
  title:String,
  price: Number,
  description: String,
  createdAt: {
  type: Date,
  default:Date.now,
  },
});

//create a product model

const product = mongoose.model("Product",productsSchema)

const connectDb = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/testProductDB");
  console.log("db is connect");

  try {
  } catch (error) {
    console.log("db is not connect");
    console.log(error.message);
    process.exit(1);
  }
};

app.post("/products", (req, res) => {
  res.send("Hello World!");
  try {
    
  } catch (error) {
    res.status(500).send({message: error.message})
    
  }
});

app.listen(port, async () => {
  console.log(`server is renning https//:localhost: ${port}`);
  await connectDb();
});
