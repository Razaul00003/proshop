import express from "express";
import connectDB from "./config/db.js";
import path from "path";
import morgan from "morgan";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import { notFound, errorHanlder } from "./middleware/errorMiddlewar.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();
connectDB();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname)));

app.use(notFound);
app.use(errorHanlder);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(PORT));
