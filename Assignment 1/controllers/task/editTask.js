import Task from "../../models/task.js";

export const editTask = async (req, res) => {

    try {

        const { id } = req.params;
        let { message } = req.body;

        if (typeof message !== "string") {
            return res.status(400).json({ message: `${message} field must be a string.` });
        }

        message = message.trim();

        if (message.length === 0) {
            return res.status(400).json({ message: `${message} field cannot be empty.` });
        }

        const taskToEdit = await Task.findById(id);

        if (taskToEdit === null) {
            return res.status(404).json({ message: "Task not found." });
        }

        taskToEdit.message = message;

        await taskToEdit.save();

        return res.status(200).json({ message: "Task updated successfully." });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}