const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());

const PORT = process.env.PORT || 8080;

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", async (req, res) => {
  // console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    // console.log(result);
    console.log(err);
    if (result) {
      res.send({ message: "Email id is already register", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "Successfully sign up", alert: true });
    }
  });
});

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
z;
