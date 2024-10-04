import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ["fiction", "non-fiction"],
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Book", BookSchema);