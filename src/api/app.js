import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/database.js";
import morgan from "morgan";
import productRoutes from "./routes/product.route.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("common"));
connectDB();

app.use("/api", productRoutes);
app.get("/", (req, res) => {
  res.send("Index !");
});
app.use((req, res) => {
  res.send("Not found!");
});

export default app;
