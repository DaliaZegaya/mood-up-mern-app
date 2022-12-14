const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Mood = new Schema(
    {
        moodName: { type: String, required: true },
        quotes: [{ type: String, required: false }],
        playlist: [{ type: String, required: false }],
        places: [{ type: String, required: false }]
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("moods", Mood)