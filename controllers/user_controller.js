const User = require("../models/users_models");
const Vault = require("../models/vaults_models");
const note = require("../controllers/note_controller");
const UserIDError = require("../errors/users/non_existing_user_id");

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
  };

  
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

exports.userCanDeleteANote = async (req, res) => {
  const existingUser = await User.findByPk(req.params.id);

  if (!existingUser) {
    throw new UserIDError(req.params.id);
  }

  await note.deleteANote(existingUser);
  return res.json({
    status: 'deleted',
    message: "Your note has been deleted successfully."
  });
};

exports.userCanUpdateNoteByTitle = async (req, res) => {
    const existingUser = await User.findByPk(req.body.id);

    if (!existingUser) {
        throw new UserIDError(req.params.id);
      };

    const updatedNoteByTitle = await note.updateANoteByTitle(req.body.title);
    return res.status(200).json({
        status: "success",
        updatedNoteByTitle,
    });

};

exports.userCanUpdateNoteByBody = async (req, res) => {
    const existingUser = await User.findByPk(req.body.id);

    if (!existingUser) {
        throw new UserIDError(req.params.id);
    };

    const updatedNoteByBody = await note.updateNoteByBody(req.body.title, req.body.body);
    return res.status(200).json({
        status: "success",
        updatedNoteByBody,
    });
}

exports.userCanGetANote = async (req, res) => {
  const existingUser = await User.findByPk(req.params.id);

  if (!existingUser) {
    throw new UserIDError(req.params.id);
  };

  const a_note = await note.getANote(req.params.id);

  return res.status(200).json({
    status: "success",
    a_note,
  });

};


exports.userCanGetAllNotes = async (req, res) => {
    const existingUser = await User.findByPk(req.params.id);

    if (!existingUser) {
        throw new UserIDError(req.params.id);
    };
    
    const notes = await note.getAllNotes(req.params.id);
    return res.status(200).json({
        status: "success",
        notes,
      });

};
