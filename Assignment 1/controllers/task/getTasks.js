import Task from "../../models/task.js";

export const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find({});

        return res.status(200).json({ tasks, message: "Tasks fetched successfully." });

    } catch (error) {
        return res.status(500).json({ error, message: "An error occurred. Please try again." });
    }
}