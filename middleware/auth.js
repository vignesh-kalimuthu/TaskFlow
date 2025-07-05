import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_here";

export default async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, token missing" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Not authorized, user not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    return res
      .status(401)
      .json({ success: false, message: "Not authorized, token invalid" });
  }
}
