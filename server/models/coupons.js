const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Coupon = new Schema(
    {
        couponCode: { type: String, required: true },
        discount: { type: Number, required: true },
        discountType: { type: String, required: true },
        quantity: { type: Number, required: true }
    },
    {
        timestamps: true
    }
)
module.exports = mongoose.model("coupons", Coupon)