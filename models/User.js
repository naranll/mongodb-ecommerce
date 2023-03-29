import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please provide an Email"],
        // unique: [true, "Email Exist"], unable to add same email, must delete email index in collection indexes
    },
    password: {
        type: String,
        required: [true, "Pleasae provide a Password"],
        unique: false,
    },
},
    {
        collection: "users",
    }
);

const User = mongoose.model("User", UserSchema, "users");

export default User;