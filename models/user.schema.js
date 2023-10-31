
const mongoose = require('mongoose');

let userschema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    number:Number,
})

const user = mongoose.model("User", userschema)

module.exports = user;
