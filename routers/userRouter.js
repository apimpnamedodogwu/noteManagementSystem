const express = require("express");
const {
  registerAUser,
  userCanCreateANote,
} = require("../controllers/user_controller");
const userRouter = express();

userRouter.route("/register").post(registerAUser);
userRouter.route("/note").post(userCanCreateANote);

module.exports = userRouter;
