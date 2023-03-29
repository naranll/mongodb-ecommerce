import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ecommerce_connection = process.env.MONGODB_CONNECTION_URL;

mongoose.connect(ecommerce_connection);

export default mongoose.connection;