// 06-jobs-api/middleware/authentication.js
import jwt from "jsonwebtoken";
import UnauthenticatedError from "../errors/unauthenticated.js";

const authenticateUser = (req, res, next) => {
  // const authHeader = req.get("Authorization");
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("No authorization header");
  }

  const token = authHeader.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // attach the user to the job routes
    // req.user = User.findById(decodedToken.userId).select("-password");
    req.user = { userId: decodedToken.userId, name: decodedToken.name };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Invalid token");
  }
};

export default authenticateUser;
