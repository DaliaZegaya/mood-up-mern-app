const router = require("express").Router()
const {
    getAllCoupons,
    getCouponById,
    createNewCoupon,
    updateCoupon,
    deleteCoupon
} = require("../controllers/coupons")

router.get("/",getAllCoupons)
router.get("/getById/:id",getCouponById)
router.post("/create",createNewCoupon)
router.put("/update/:id",updateCoupon)
router.delete("/delete/:id",deleteCoupon)


module.exports = router