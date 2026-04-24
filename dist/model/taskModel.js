import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
    },
    dueDate: {
        type: Date,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
}, { timestamps: true });
export const taskModel = mongoose.model("Tasks", taskSchema);
