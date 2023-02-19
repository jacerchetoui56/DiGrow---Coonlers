const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const customError = {
    statusCode: err.status || err.code || 500,
    message: err.message || "Something went wrong",
  };
  // ! for the moment
  res
    .status(customError.statusCode)
    .json({ success: false, message: customError.message });
};

module.exports = errorHandlerMiddleware;
