import mongoose from "mongoose";

const ecommerce_connection = "mongodb+srv://nrll:0Bl4cKStaRrrR@cluster0.ylkhqbp.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(ecommerce_connection);

export default mongoose.connection;