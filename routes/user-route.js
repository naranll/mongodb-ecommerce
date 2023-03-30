import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (user && await (bcrypt.compare(password, user.password))) {
            console.log("matched");
            res.status(200).send({ "message": "existing user, able to login" });
        } else {
            res.status(401).send({ "message": "unauthorized, user password wrong" });
        }

    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
    });

    const result = await newUser.save();
});

export default userRouter;
