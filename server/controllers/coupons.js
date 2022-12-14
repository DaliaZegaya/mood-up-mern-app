const couponsModel = require("../models/coupons")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")

const getAllCoupons = async (req, res) => {
    getAll(req,res,couponsModel)
}
const getCouponById = (req,res) => {
    getById(req,res,couponsModel)
}
const createNewCoupon = (req,res) => {
    create(req,res,couponsModel)
}
const updateCoupon = (req,res) => {
    updateOne(req,res,couponsModel)
}
const deleteCoupon = (req,res) => {
    deleteOne(req,res,couponsModel)
}

module.exports = {
    getAllCoupons,
    getCouponById,
    createNewCoupon,
    updateCoupon,
    deleteCoupon
}