class ExpressError extends Error {
  constructor(status, message) {
    this.status = status;
    this.message = message;
  }
}
module.exports = ExpressError;

//this is a custom error class that extends the built-in Error class. It takes in a status code and a message, which can be used to provide more information about the error when it is thrown. The status code can be used to indicate the type of error (e.g., 404 for not found, 500 for server error), while the message can provide additional details about the error.
