var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/Netflix-signUp");
const formData = mongoose.model("formData", {
  name: String,
  email: String,
  number: Number,
  password: String,
  rePassword: String,
});

router.use(cors());
router.use(express.json());

router.post("/signUp", async function (req, res, next) {
  let { name, email, number, password, rePassword } = req.body;
  const FormData = new formData({ name, email, number, password, rePassword });
  await FormData.save();
});

module.exports = router;
