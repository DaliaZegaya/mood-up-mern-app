const router = require("express").Router()
const {
    getAllFeelings
} = require("../controllers/feelings")

router.get("/",getAllFeelings)


module.exports = router