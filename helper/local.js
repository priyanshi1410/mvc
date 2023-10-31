const Strategy = require("passport-local");
const user = require("../models/user.schema");

const LocalAuth = (passport) => {
  passport.use(
    new Strategy(async (username, password, done) => {
      let User = await user.findOne({ username : username });
      if (!User) {
        return done(null, false);
      }
      if (User.password != password) {
        return done(null, false);
      }
      return done(null, User);
    })
  );
  passport.serializeUser((User, done) => {
    return done(null, User.id);
  });
  passport.deserializeUser(async (id, done) => {
    let User = await user.findById(id);
    return done(null, User);
  });
};

module.exports = LocalAuth;
