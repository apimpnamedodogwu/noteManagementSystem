const Vault = require('../models/vaults_models');
const ExistingVault = require("../errors/vaults/existing_vault")
const note = require("../controllers/note_controller");



exports.addANoteToAVault = async (Data) => {
    const existingVault = await Vault.findOne({
        where: {userId: Data.id,
        }
    });

    if (!existingVault) {
        throw new ExistingVault("Your vault does not exist!");
    };

    const updatedVault = existingVault.save(Data);
    return updatedVault;
};

exports.deleteANoteFromVault = async (id) => {
    const existingVault = await Vault.findOne({
        where: {userId: id,
        }
    });

    if (!existingVault) {
        throw new ExistingVault("Your vault does not exist!");
    };

    note.deleteANote(id);
};

exports.updateANoteByTitleInAVault = async (id, title) => {
    const existingVault = await Vault.findOne({
        where: {userId: id,
        }
    });

    if (!existingVault) {
        throw new ExistingVault("Your vault does not exist!");
    };

    const updatedNote = note.updateANoteByTitle(title);
    return updatedNote;
};

exports.updateNoteByBodyInAVault = async (Data) => {
    const existingVault = await Vault.findOne({
        where: {userId: id,
        }
    });

    if (!existingVault) {
        throw new ExistingVault("Your vault does not exist!");
    };

    const updatedNote = note.updateNoteByBody(Data.title, Data.body);
    return updatedNote;
};