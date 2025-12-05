const mongoose = require("mongoose");

const subCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    }
}, { timestamps: true })

const subCategoryModel = mongoose.model("SubCategory", subCategorySchema)
module.exports = subCategoryModel