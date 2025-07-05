import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate, completed } = req.body;
    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      owner: req.user._id,
      completed: completed === "Yes" || completed === true,
    });

    const saved = await task.save();
    res.status(201).json({
      success: true,
      message: "Task created successfully",
      task: saved,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getTasks = async (req, res) => {};
