import mongoose from "mongoose";
import "../config/mongoose-config.js";

const ProductSchema = new mongoose.Schema(
    {
        image: String,
        name: String,
        proce: Number,
        stock: Number,
        sale: Number,
        category: String,
    },
    {
        collection: "products"
    }
);

const Products = mongoose.model("Products", ProductSchema, "products");

export default Products;