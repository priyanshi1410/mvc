const { Router } = require("express");


const passport = require("passport");
const { users, createuser, updateuser, deleteuser, Ui, charts, signup, logins, login, signups, signupcreate } = require("../controllers/user.controllers");
const { finduser } = require("../middleware/user.middlel");

const Route = Router();

Route.get("/", users);

Route.post("/", createuser);

Route.patch("/:id", updateuser);

Route.delete("/:id", deleteuser);

Route.get("/ui", finduser, Ui);

Route.get("/chart", finduser, charts);

Route.post("/signup", signup);

Route.get("/login", logins);

Route.post("/login",passport.authenticate("local"), login);

Route.get("/signup_page", signups)

Route.post("/signup_page", finduser ,signupcreate)

Route.get("/user",(req , res) =>{
    console.log(req.user);
    res.send("find user...");
})
// password reset

Router.post("/reset",isAuth ,resetpass )

// logout 
Router.get("/logout",logout)

module.exports = Route;
