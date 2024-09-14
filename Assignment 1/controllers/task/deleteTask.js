import Task from "../../models/task.js";

export const deleteTask = async (req, res) => {

    try {
        const { id } = req.params;

        await Task.findByIdAndDelete(id);

        return res.status(200).json({ message: "Task deleted successfully." });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}