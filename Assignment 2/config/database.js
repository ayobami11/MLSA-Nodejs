import mongoose from "mongoose";

import logger from "../utils/logger.js";

const clientOptions = { serverApi: { version: "1", strict: true, deprecationErrors: true } };

export const connectToDatabase = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.MONGODB_URI_2, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        logger.info("Database connection successful.");
    } catch (error) {
        console.error(error);
        logger.error(`Database connection failed: ${error}`);
    }

}