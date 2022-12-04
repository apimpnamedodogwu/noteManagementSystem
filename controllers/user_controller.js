const User = require("../models/users_models");
const Vault = require("../models/vaults_models");
const note = require("../controllers/note_controller");

exports.registerAUser = async (req, res) => {
  const existingUser = await User.findOne({
    where: { email_address: req.body.email },
  });
  if (existingUser) {
    return res.status(404).json({
      status: "error",
      message: `User with email ${req.body.email} already exists.`,
    });
  }

  const user = await User.create({
    last_name: req.body.last_name,
    first_name: req.body.first_name,
    username: req.body.username,
    email_address: req.body.email,
  });

  await Vault.create({
    name: user.last_name + " " + user.first_name,
    password: req.body.password,
    userId: user.id,
  });

  return res.status(200).json({
    status: "success",
    message: `User with username ${user.username} has been successfully registered.`,
    user,
  });
};

exports.userCanCreateANote = async (req, res) => {
  const existingUser = await User.findOne({
    where: { email_address: req.body.email },
  });

  if (!existingUser) {
    return res.status(404).json({
      status: "error",
      message: `User with ${req.body.email} does not exist.`,
    });
  }
  const noteDetails = {
    title: req.body.title,
    body: req.body.body,
    userId: existingUser.id,
  };

  const createdNote = await note.createANote(noteDetails);

  if (createdNote == null) {
    return res.status(400).json({
      status: "fail",
      message: "note already exists",
    });
  }
  return res.status(200).json({
    status: "success",
    createdNote,
  });
};

const userCanDeleteANote = async (Data) => {
  const existingUser = await User.findByPk(Data.id);

  if (!existingUser) {
    return Data.status(404).json({
      status: "error",
      message: `User with ${Data.id} does not exist.`,
    });
  }

  const deletedNote = note.deleteANote(existingUser);
  return Data.json({
    deletedNote,
  });
};

const userCanGetANote = async (Data) => {
  const existingUser = await User.findByPk(Data.id);

  if (!existingUser) {
    return Data.status(404).json({
      status: "error",
      message: `User with ${Data.id} does not exist.`,
    });
  }

  const foundNote = note.getNote(existingUser);

  return Data.json({
    foundNote,
  });
};

const userCanGetAllNotes = () => {
  return note.getAllNotes();
};
