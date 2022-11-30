const Note = require('../models/notes_models');

exports.createANote = async (req, res) => {
    const existingTitle = await Note.findOne(req.body.title);

    if(existingTitle) {
        return res.status(404).json({
            status: 'error',
            message: `A note with ${req.body.title} already exists.`
        });
    };

    const note = await Note.create({
        title: req.body.title,
        body: req.body.body,
    });
    return res.status(200).json({
        status: 'success',
        message: `Your note with title ${note.title} has been successfully created.`
    });
}

exports.deleteANote = async (req, res) => {
    const nonExistingNote = await Note.findByPk(req.params.id);

    if(!nonExistingNote) {
        return res.status(404).json({
            status: 'error',
            message: `Note with id ${req.params.id} does not exist.`
        });
    };

    await Note.destroy({
        where: {id: req.params.id}
    });
    return res.status(200).json({
        status: 'success',
        message: `Note with id ${req.params.id} has been deleted successfully.`
    });
}

exports.updateANoteByTitle = async (req, res) => {
    const existingTitle = await Note.findOne(req.body.title);

    if(existingTitle) {
        return res.status(404).json({
            status: 'error',
            message: `A note with ${req.body.title} already exists.`
        });
    };

    const noteToBeUpdated = await Note.findByPk(req.params.id);

    if(!noteToBeUpdated) {
        return res.status(404).json({
            status: 'error',
            message: `Note with id ${req.params.id} does not exist.`
        });
    };

    await Note.update({
        title: req.body.title,
    });
    return res.status(200).json({
        status: 'success',
        message: 'Your note has been updated successfully.'
    });
}

exports.updateNoteByBody = async (res, req) => {

    const noteToBeUpdated = await Note.findByPk(req.params.id);

    if(!noteToBeUpdated) {
        return res.status(404).json({
            status: 'error',
            message: `Note with id ${req.params.id} does not exist.`
        });
    };

    await Note.update({
        body: req.body.body
    });
    return res.status(200).json({
        status: 'success',
        message: 'Your note has been updated successfully.'
    });
}

exports.getNote = async (req, res) => {
    const note = await Note.findByPk(req.params.id)

    if(!note) {
        return res.status(404).json({
            status: 'error',
            message: `Note with id ${req.params.id} does not exist.`
        });
    };
    return res.status(200).json({
        status: 'Ok',
        note,
    })
}

exports.getAllNotes = async (req, res) => {
    const notes = await Note.findAll();
    return res.status(200).json({
        status: 'success',
        notes,
    })
}
