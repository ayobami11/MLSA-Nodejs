import Task from "../../models/task.js";

export const getTask = async (req, res) => {

    try {

        const { id } = req.params;

        const task = await Task.findById(id);

        if (task === null) {
            return res.status(404).json({ message: "Task not found." });
        }

        return res.status(200).json({ task, message: "Task fetched successfully" });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}