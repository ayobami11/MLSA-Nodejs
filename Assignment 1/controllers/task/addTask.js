import Task from "../../models/task.js";

export const addTask = async (req, res) => {

    try {
        let { message } = req.body;

        if (typeof message !== "string") {
            return res.status(400).json({ message: `${message} field must be a string.` });
        }

        message = message.trim();

        if (message.length === 0) {
            return res.status(400).json({ message: `${message} field cannot be empty.` });
        }

        await Task.create({ message });

        return res.status(201).json({ message: "Task created successfully." });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}