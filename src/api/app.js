import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connectDB from "./config/database.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
connectDB();

app.get("/", (req, res) => {
  res.send("Index !");
});

export default app;
