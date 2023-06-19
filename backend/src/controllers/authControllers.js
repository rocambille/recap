const models = require("../models");

const getUserByUsernameWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .findByUsernameWithHashedPassword(req.body.username)
    .then(([rows]) => {
      const userInDatabase = rows[0];

      if (userInDatabase == null) {
        res.sendStatus(422);
      } else {
        req.user = userInDatabase;

        next();
      }
    });
};

module.exports = {
  getUserByUsernameWithPasswordAndPassToNext,
};
