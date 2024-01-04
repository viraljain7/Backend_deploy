const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    salary: {
        type: number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: String,
        required: true
    },
    workInHospital: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"

    },

}, { timestamps: true });

export const Doctor = mongoose.model("Doctor", doctorSchema)