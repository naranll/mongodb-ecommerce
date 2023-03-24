import express from "express";

const userRouter = express.Router();

userRouter.post("/login", async (req, res) => {
    console.log("user", req.body);
})

export default userRouter;