class NoteIDError extends Error {
    
    constructor(id) {
        super(`Note with id ${id} does not exist!`);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;

    };

    statusCode() {
        return this.status;

      };
    
};

module.exports = NoteIDError;