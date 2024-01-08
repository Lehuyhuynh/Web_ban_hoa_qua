const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", (req, res) => {
  console.log(req.body);
});

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
