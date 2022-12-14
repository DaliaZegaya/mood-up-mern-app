const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Question = new Schema(
    {
        firstQuestion: { type:String, require:true },
        secondQuestion: { type:String, require:true },
        thirdQuestion: { type:String, require:true },
        fourthQuestion: { type:String, require:true },
        fifthQuestion: { type:String, require:true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("questions", Question)