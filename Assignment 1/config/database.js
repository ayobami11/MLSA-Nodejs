import mongoose from "mongoose";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const connectToDatabase = async () => {
    try {
        // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
        await mongoose.connect(process.env.MONGODB_URI_1, clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error(error);
    }

}