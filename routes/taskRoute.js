import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
  getTaskById,
} from "../controllers/taskControllers.js";
import authMiddleware from "../middleware/auth.js";

const taskRouter = express.Router();

taskRouter.post("/create", authMiddleware, createTask);
taskRouter.get("/getAllTasks", authMiddleware, getTasks);
taskRouter.put("/update/:id", authMiddleware, updateTask);
taskRouter.delete("/delete/:id", authMiddleware, deleteTask);
taskRouter.get("/getTask/:id", authMiddleware, getTaskById);

export default taskRouter;
