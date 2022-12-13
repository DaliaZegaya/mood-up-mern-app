const feelingsModel = require("../models/feelings")
const {
    getAll
} = require("./main")

const getAllFeelings = (req, res) => {
    getAll(req,res,feelingsModel)
}

module.exports = {
    getAllFeelings
}