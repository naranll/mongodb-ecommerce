import mongoose from "mongoose";
import "../config/mongoose-config.js";

const CategorySchema = new mongoose.Schema(
    {
        name: String,
    },
    {
        collection: "category",
    }
)

const Category = mongoose.model("Category", CategorySchema, "category");

export default Category;