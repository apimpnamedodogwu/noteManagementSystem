class NonExistingTitle extends Error {
    
    constructor(title) {
        super(`Note with title ${title} does not exist!`);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;

    };

    statusCode() {
        return this.status;

      };
    
};

module.exports = NonExistingTitle;