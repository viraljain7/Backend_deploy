const mongoose = require("moongoose")

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Category = mongoose.model("Category", categorySchema)