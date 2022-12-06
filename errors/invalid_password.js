class InvalidPasswordError extends Error {
    
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
        this.status = 404;

    };

    statusCode() {
        return this.status;

      };
    
};

module.exports = InvalidPasswordError;