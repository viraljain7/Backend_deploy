const mongoose = reqiure("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)