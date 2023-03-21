import express from "express";
import Products from "../models/Products.js";
import upload from "../util/multer-handler.js";

const productsRouter = express.Router();

// productsRouter.post("/products", async (req, res) => {
//     console.log("products router start");
//     console.log("incoming request", req.body);
// });

productsRouter.post("/products", upload.single("file"),
    (req, res) => {
        console.log(req);
    }
)

export default productsRouter;

