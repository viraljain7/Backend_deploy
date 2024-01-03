const mongoose = require("mongoose")
const moongoose = require("moongoose")

const orderItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Type.ObjectId,
        ref: "User"
    },
    OrderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Cancelled", "Delivered"],
        default: "pending"
    }


}, { timestamps: true })

export const Order = mongoose.Model("Order", orderSchema)