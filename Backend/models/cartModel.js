const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: mongoose.Schema.ObjectId,
        ref: "Product",
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}, { timestamps: true })

const cartModel = mongoose.model("Cart", cartSchema)
module.exports = cartModel