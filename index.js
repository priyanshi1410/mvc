const express = require("express");
const connect = require("./config/db");
const cookies = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalAuth = require("./helper/local");
const Route = require("./routes/user.route");

const app = express();
app.use(session({secret : "private-key"}));
app.use(passport.initialize());
app.use(passport.session());
LocalAuth(passport);

app.use(express.json());
app.use(cookies());

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.use("/user", Route);

app.listen(8090, () => {
  connect();
  console.log("listening on port 8090");
});
