import express from "express";
import Product from "../models/Product.js";
import Category from "../models/Category.js";
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
        // console.log("req body prodinfo", JSON.parse(req.body.prodInfo));

        //req.file will be unknown without multer middleware
        // console.log("prodImage", req.file);
        const { secure_url } = await uploadCloud.uploader.upload(req.file.path, {
            folder: "products",
        });

        const newProduct = Product({
            ...JSON.parse(req.body.prodInfo),
            image: secure_url,
        });
        // console.log("newProduct", newProduct);
        const result = await newProduct.save();
        // console.log(result);
        res.json({ product: result });
    }
);


productsRouter.get("/products", async (req, res) => {
    const categories = await Category.find({});
    res.send(categories);
})

export default productsRouter;

