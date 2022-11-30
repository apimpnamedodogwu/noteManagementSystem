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

    if(nonExistingNote) {
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
