import Task from "../../models/task.js";

export const toggleCompleted = async (req, res) => {

    try {

        const { id } = req.params;

        const taskToEdit = await Task.findById(id);

        if (taskToEdit === null) {
            return res.status(404).json({ message: "Task not found." });
        }

        taskToEdit.completed = !taskToEdit.completed;

        await taskToEdit.save();

        return res.status(200).json({ message: "Task updated successfully." });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}