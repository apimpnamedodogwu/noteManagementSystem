class UserIDError extends Error {
    
    constructor(id) {
        super(`User with id ${id} does not exist!`);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;

    };

    statusCode() {
        return this.status;

      };
    
};

module.exports = UserIDError;
