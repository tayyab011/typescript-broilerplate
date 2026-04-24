import { Request, Response } from "express";
import { taskModel } from "../model/taskModel.js";
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (new Date(dueDate) <= new Date()) {
      return res
        .status(400)
        .json({ message: "Due date must be in the future" });
    }

    const task = await taskModel.create({
      title,
      description,
      status,
      dueDate,
      user: req.user?.user_id,
    });
    const user = await taskModel.findById(task._id).populate("user");
    res.status(201).json({ task, user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const reqbody = req.body;
    const task = await taskModel.updateOne({ _id: id }, reqbody);
    res.status(200).json({
      success: true,
      task,
      message: "task update successfull",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "task update failed",
      error: error.toString(),
    });
  }
};
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await taskModel.deleteOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "task delete successfull",
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: "task delete failed",
      error: error.toString(),
    });
  }
};
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await taskModel.findById(req.params.id);
    /*   console.log("user", task.user); */
    if (!task || task.user.toString() !== req.user?.user_id) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
