const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Quote = new Schema(
    {
        quote: { type: String, required: false },
        author: { type: String, required: false },
        mood: { type: String, required: false }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("quotes", Quote)