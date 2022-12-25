const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = new Schema(
    {
        questionNumber: { type:Number, required:true },
        question: { type:String, required:true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("questions", Question)