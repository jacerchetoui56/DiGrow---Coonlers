const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { UnauthorizedError } = require("../errors");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) throw new UnauthorizedError("No token provided");
  const accessToken = authHeader.split(" ")[1];
  if (!accessToken) throw new UnauthorizedError("No token provided");
  try {
    const decoded = await promisify(jwt.verify)(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET
    );
    if (!decoded) throw new UnauthorizedError("Invalid token");
    req.user = decoded;
  } catch (err) {
    throw new UnauthorizedError("token expired");
  }
  next();
};

module.exports = authMiddleware;
