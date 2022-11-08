import express from "express";
import products from "./data/products.js";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
connectDB();

//ENVIRONMENTAL CONSTANT
const PORT = process.env.PORT || 5000;

const app = express();
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.map((product) => {
    product._id === req.params.id;
    res.json(product);
  });
});

app.listen(PORT, console.log(PORT.cyan.underline));
