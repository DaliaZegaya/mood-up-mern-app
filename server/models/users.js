const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Joi = require("joi")
const passwordComplexity = require("joi-password-complexity")
const { string } = require("joi")

const User = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        nickName: { type: String, required: false },
        email: { type: String, required: true, lowercase: true },
        password: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        phoneNumber: { type: String, required: true },
        adress: { type: String, required: false },
        position: { type: String, required: false },
        hobbies: [{ type: String }],
        moods: [{ type: mongoose.Schema.Types.ObjectId, ref: "moods", required: false }],
    },
    {
        timestamps: true,
        timeseries: true
    }
)

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: passwordComplexity().required(),
        dateOfBirth: Joi.date(),
        phoneNumber: Joi.string().min(10).max(10)
    })
    return schema.validate(data)
}
const usersModel = mongoose.model("users", User)

module.exports = {
    usersModel, 
    validate
}