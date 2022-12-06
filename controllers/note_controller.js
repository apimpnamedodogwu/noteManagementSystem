const Note = require("../models/notes_models");
const NoteIDError = require("../errors/notes/non_existing_note_id");
const ExistingTitle = require("../errors/notes/existing_title");
const NonExistingTitle = require("../errors/notes/non_existing_title");


exports.createANote = async (Data) => {
  const existingTitle = await Note.findOne({ where: { title: Data.title } });

  if (existingTitle) {
    return null;
  }

  const note = await Note.create(Data);
  return note;
};

exports.deleteANote = async (id) => {
    const existingNote = await Note.findOne({
        where: {userId: id},
    });

    if(!existingNote) {
        throw new NoteIDError(id);
    };
    

    await Note.destroy({
        where: {userId: id}
    });
    return;
}

exports.updateANoteByTitle = async (title) => {
    const existingNote = await Note.findOne({where: {title: title}});

    if(!existingNote) {
        throw new NonExistingTitle(title);
    };

    const noteToBeUpdatedByTitle = await Note.update({
        where: {title: title},
    });
    return noteToBeUpdatedByTitle;

};

exports.updateNoteByBody = async (title, body) => {

    const existingNote = await Note.findOne({where: {title: title}});

    if(!existingNote) {
        throw new NonExistingTitle(title);
    };

    const noteTobeUpdateByBody = await Note.findOne({where: {
        body: body,

    }});
    return noteTobeUpdateByBody;

};

exports.getANote = async (id) => {
    const existingNote = await Note.findOne({
        where: {userId: id},
    });

    if(!existingNote) {
        throw new NoteIDError(id);
        
    };
    return existingNote;

}

exports.getAllNotes = async (id) => {
    const notes = await Note.findAll({
        where: {userId: id},
        limit: 5,
    });
    return notes;
};
