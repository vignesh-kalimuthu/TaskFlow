import express from "express";
import {
  registerUser,
  LoginUser,
  getCurrentUser,
  updateProfile,
  updatePassword,
} from "../controllers/userControllers";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", LoginUser);

userRouter.get("/current", getCurrentUser);
userRouter.put("/profile", updateProfile);
userRouter.put("/password", updatePassword);
