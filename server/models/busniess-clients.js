const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BusniessClient = new Schema(
    {
        ownerDetails: { type: String, required: true },
        busniessName: { type: String, required: true },
        category: { type: String, required: true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("busniessClients", BusniessClient)