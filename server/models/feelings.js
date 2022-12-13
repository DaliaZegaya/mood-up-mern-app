const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Feeling = new Schema(
    {
        moodName: { type: String, required: true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("feelings", Feeling)