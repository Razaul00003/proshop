import express from "express";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHanlder } from "./middleware/errorMiddlewar.js";
dotenv.config();
connectDB();
const app = express();

app.use("/api/products", productRoutes);
app.use(notFound);
app.use(errorHanlder);
//ENVIRONMENTAL CONSTANT
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(PORT.cyan.underline));
