class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message); // important fix
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;