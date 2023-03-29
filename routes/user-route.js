import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    console.log("user", req.body);
});

userRouter.post("/register", async (req, res) => {
    // console.log("pass", req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // console.log("register hashedPass", hashedPassword);

    const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
    });

    const result = await newUser.save();
})

export default userRouter;