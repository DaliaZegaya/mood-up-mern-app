const mongoose = require("mongoose")
const Schema = mongoose.Schema

const User = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        nickName: { type: String, required: false },
        email: { type: String, required: true },
        password: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        phoneNumber: { type: String, required: true },
        adress: { type: String, required: false },
        position: { type: String, required: false },
        hobbies: [{ type: String, required: false}],
        moods: [{ type: String, required: false}]

    },
    {
        timestamps: true,
        timeseries: true
    }
)
module.exports = mongoose.model("users", User)