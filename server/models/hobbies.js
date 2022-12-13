const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Hobby = new Schema(
    {
        hobbyName: { type: String, required: true },
        category: { type: String, required: true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("hobbies", Hobby)