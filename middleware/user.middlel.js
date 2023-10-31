const user = require("../models/user.schema");

const finduser = async (req, res, next) => {
  let { id } = req.cookies;
  if (id) {
    let data = await user.findById(id);
    if (data.username == "prishu") {
      return next();
    } else {
      return res.send("Couldn't find");
    }
  } else {
    res.redirect("/user/login");
  }
};

module.exports = { finduser };
