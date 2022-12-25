const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Mood = new Schema(
    {
        moodName: { type: String, required: true },
        quotes: [{ type: mongoose.Types.ObjectId, ref: "quotes" }],
        playlist: [{ type: String, required: false }],
        places: [{ type: mongoose.Types.ObjectId, ref: "busniessClients" }]
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("moods", Mood)