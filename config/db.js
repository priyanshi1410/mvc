const mongoose = require("mongoose");
require("dotenv").config();

const connect = async () => {
  let url = process.env.DB_URL;
  await mongoose.connect(url);
  console.log("Connected");
};

module.exports = connect;
