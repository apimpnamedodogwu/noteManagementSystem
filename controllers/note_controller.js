const Note = require("../models/notes_models");

// const Data = {
//     title: Data.title,
//     body: Data.body,
//     user_id: Data.user_id,
// };

exports.createANote = async (Data) => {
  const existingTitle = await Note.findOne({ where: { title: Data.title } });

  if (existingTitle) {
    return null;
  }

  const note = await Note.create(Data);
  return note;
};

// exports.deleteANote = async (id) => {
//     const nonExistingNote = await Note.findByPk(Data.id);

//     if(!nonExistingNote) {
//         return Data.status(404).json({
//             status: 'error',
//             message: `Note with id ${Data.id} does not exist.`
//         });
//     };

//     await Note.destroy({
//         where: {id: Data.id}
//     });
//     return Data.status(200).json({
//         status: 'success',
//         message: `Note with id ${Data.id} has been deleted successfully.`
//     });
// }

// exports.updateANoteByTitle = async (Data) => {
//     const existingTitle = await Note.findOne({where: {title: Data.title}});

//     if(existingTitle) {
//         return Data.status(404).json({
//             status: 'error',
//             message: `A note with ${Data.title} already exists.`
//         });
//     };

//     const noteToBeUpdated = await Note.findByPk(Data.id);

//     if(!noteToBeUpdated) {
//         return Data.status(404).json({
//             status: 'error',
//             message: `Note with id ${Data.id} does not exist.`
//         });
//     };

//     const updatedNote = await Note.update({
//         title: noteToBeUpdated.title,
//     });
//     return Data.status(200).json({
//         status: 'success',
//         message: 'Your note has been updated successfully.',
//         updatedNote,
//     });
// }

// exports.updateNoteByBody = async (Data) => {

//     const noteToBeUpdated = await Note.findByPk(Data.id);

//     if(!noteToBeUpdated) {
//         return Data.status(404).json({
//             status: 'error',
//             message: `Note with id ${Data.id} does not exist.`
//         });
//     };

//     const updatedNote = await Note.update({
//         body: noteToBeUpdated.body
//     });
//     return Data.status(200).json({
//         status: 'success',
//         message: 'Your note has been updated successfully.',
//         updatedNote,
//     });
// }

// exports.getNote = async (Data) => {
//     const note = await Note.findByPk(Data.id)

//     if(!note) {
//         return res.status(404).json({
//             status: 'error',
//             message: `Note with id ${Data.id} does not exist.`
//         });
//     };
//     return Data.status(200).json({
//         status: 'Ok',
//         note,
//     })
// }

// exports.getAllNotes = async (res) => {
//     const notes = await Note.findAll({
//         limit: 5,
//     });
//     return res.status(200).json({
//         status: 'success',
//         notes,
//     })
// }
