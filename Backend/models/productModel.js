const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: "Category",
        required: true
    },
    subCategory: {
        type: mongoose.Schema.ObjectId,
        ref: "SubCategory",
        required: true
    },
    images: [
        {
            type: String
        }
    ],
    description: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    originalPrice: {
        type: Number,
        default: 0
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    finalPrice: {
        type: Number,
        default: 0,
        min: 1
    },
    stock: {
        type: Number,
        default: null
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true })


const productModel = mongoose.model("Product", productSchema)
module.exports = productModel;