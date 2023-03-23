import mongoose from "mongoose";
import "../config/mongoose-config.js";

const ProductSchema = new mongoose.Schema(
    {
        image: String,
        name: String,
        price: Number,
        stock: Number,
        sale: Number,
        category: { type: mongoose.Types.ObjectId, ref: 'Category' },
    },
    {
        collection: "products"
    }
);

const Product = mongoose.model("Products", ProductSchema, "products");

export default Product;