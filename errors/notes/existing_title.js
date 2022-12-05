class ExistingTitle extends Error {
    
    constructor(title) {
        super(`Note with id ${title} already exists!`);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;

    };

    statusCode() {
        return this.status;

      };
    
};

module.exports = ExistingTitle;