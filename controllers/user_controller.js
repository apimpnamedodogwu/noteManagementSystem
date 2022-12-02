const User = require('../models/users_models');
const Vault = require('../models/vaults_models');
const note = require('../controllers/note_controller');

exports.registerAUser = async (req, res) => {

    const existingUser = await User.findOne({where: {email: req.body.email}});
    if(existingUser) {
        return res.status(404).json({
            status: 'error',
            message: `User with email ${req.body.email} already exists.`
        });
    };

    const vault = await Vault.create({
        title: "",
        body: "",
        password: req.body.password,
        
    });

    const user = await User.create({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        username: req.body.username,
        email: req.body.email,
        vault_id: vault.id,
        
    });
    return res.status(200).json({
        status: 'success',
        message: `User with username ${user.username} has been successfully registered.`,
        user,
    });
}

const userCanCreateANote = async (Data) => {
    const existingUser = await User.findByPk(Data.id);

    if(!existingUser) {
        return Data.status(404).json({
            status: 'error',
            message: `User with ${Data.id} does not exist.`
        });
    };
    
    const createdNote = note.createANote(existingUser);
    return Data.json({
        createdNote,
    })
    
}

const userCanDeleteANote = async (Data) => {
    const existingUser = await User.findByPk(Data.id);

    if(!existingUser) {
        return Data.status(404).json({
            status: 'error',
            message: `User with ${Data.id} does not exist.`
        });
    };

    const deletedNote = note.deleteANote(existingUser);
    return Data.json({
        deletedNote,
    })
}

const userCanGetANote = async (Data) => {
    const existingUser = await User.findByPk(Data.id);

    if(!existingUser) {
        return Data.status(404).json({
            status: 'error',
            message: `User with ${Data.id} does not exist.`
        });
    };

    const foundNote = note.getNote(existingUser);

    return Data.json({
        foundNote,
    })
}

const userCanGetAllNotes = () => {
    return note.getAllNotes();

}

