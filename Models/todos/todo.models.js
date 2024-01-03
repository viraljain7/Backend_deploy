const mongoose = require('moongoose')

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: false
    }, createdBy: {
        type: mongoose.Schema.Types.objectId,
        Ref: "User"
    }
    , subTodo: [{
        type: mongoose.Schema.Types.objectId,
        Ref: "SubTodo"
    }]

}, { timestamps: true })

export const Todo = mongoose.model("Todo", todoSchema)