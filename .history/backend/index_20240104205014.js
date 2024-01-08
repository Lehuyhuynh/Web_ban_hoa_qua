const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

//mongodb connection
console.log(process.env.MONGOOB_URL);

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGOOB_URL)
  .then(() => console.log("Connect to Databse"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});
console.log(userSchema);
//
const userModel = mongoose.model("user", userSchema);

//api
app.get("/", (req, res) => {
  res.send("Server is running");
});

//sign up
app.post("/signup", (req, res) => {
  console.log(req.body);

  const { email } = req.body;

  userModel
    .findOne({ email: email })
    .then((result) => {
      console.log(result);
      if (result) {
        res.send({ message: "Email id is already register", alert: false });
      } else {
        const data = userModel(req.body);
        const save = data.save();
        res.send({ message: "Successfully sign up", alert: true });
      }
    })
    .catch((err) => console.log(err));
});

//api login
app.post("/login", (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel
    .findOne({ email: email }, { password: password })
    .then((result) => {
      // console.log(result);
      if (result) {
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          image: result.image,
        };
        console.log(dataSend);
        res.send({
          message: "Login is successfully",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email is not available, please sign up",
          alert: false,
        });
      }
    })
    .catch((err) => console.log(err));
});

//server is ruuning
app.listen(PORT, () => console.log("server is running at port : " + PORT));
