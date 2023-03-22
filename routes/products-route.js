import express from "express";
import Products from "../models/Products.js";
import upload from "../util/multer-handler.js";
import uploadCloud from "../config/cloudinary-config.js";

const productsRouter = express.Router();

// productsRouter.post("/products", async (req, res) => {
//     console.log("products router start");
//     console.log("incoming request", req.body);
// });

//upload.single(the name given on frontend)
// post request comes from /products --> take "prodImage" from inside req, multer, save it in uploads --> endpoint function
productsRouter.post("/products", upload.single("prodImage"),
    async (req, res) => {
        console.log(JSON.parse(req.body.prodInfo));
        //req.file will be unknown without multer middleware
        console.log("prodImage", req.file);
        const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
            folder: "products",
        });
        console.log("url: ", secure_url);
    }
)

export default productsRouter;

