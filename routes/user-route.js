import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";
// import { jsonwebtoken as jwt } from "jsonwebtoken";
import jwt from "jsonwebtoken";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (user && await (bcrypt.compare(password, user.password))) {
            console.log("matched");

            const token = jwt.sign(
                { user_id: user._id, email },
                "MyPrivateKey",
                { expiresIn: "2h" },
            );

            res.status(200).send({
                success: true,
                status: "Logged in Successfuly",
                data: user,
                token: token,
            });

            return;
        } else {
            res.status(401).send({ "message": "unauthorized, user password wrong" });
        }
    } catch (error) {
        console.error(error);
    }
});

userRouter.post("/register", async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    try {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        const result = await newUser.save();
        console.log("new user registered");
    } catch (error) {
        console.error(error);
    }
});

export default userRouter;
