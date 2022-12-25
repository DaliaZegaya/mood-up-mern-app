const mongoose = require("mongoose")
const Schema = mongoose.Schema

const BusniessClient = new Schema(
    {
        ownerDetails: { type: String, required: false },
        busniessName: { type: String, required: true },
        category: { type: String, required: true },
        websiteLink: { type: String, required: true },
        coupon: { type: mongoose.Types.ObjectId, ref: "coupons" }
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model("busniessClients", BusniessClient)