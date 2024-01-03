const mongoose = require('mongoose');

const userSchema = new moongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: [true, "password is Required"]
        }
    },
    { timestamps: true }
)

export const User = mongoose.model("User", userSchema)