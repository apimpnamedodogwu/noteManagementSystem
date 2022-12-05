const express = require("express");
const {
  registerAUser,
  userCanCreateANote,
  userCanDeleteANote,
  userCanUpdateNoteByTitle,
  userCanUpdateNoteByBody,
  userCanGetANote,
  userCanGetAllNotes,

} = require("../controllers/user_controller");
const userRouter = express();

userRouter.route("/register").post(registerAUser);
userRouter.route("").post(userCanCreateANote);
userRouter.route("").delete(userCanDeleteANote);
userRouter.route("/body").patch(userCanUpdateNoteByTitle);
userRouter.route("/title").patch(userCanUpdateNoteByBody);
userRouter.route("").get(userCanGetANote);
userRouter.route("/notes").get(userCanGetAllNotes);

module.exports = userRouter;
