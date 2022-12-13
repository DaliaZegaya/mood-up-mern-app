const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Place = new Schema(
    {
        category: { type: String, required: true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("places", Place)