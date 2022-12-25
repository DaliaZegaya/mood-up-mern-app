const moodsModel = require("../models/moods")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")

const getAllMoods = async (req, res) => {
    getAll(req,res,moodsModel,"quotes")
}
const getMoodById = (req,res) => {
    getById(req,res,moodsModel)
}
const createNewMood = (req,res) => {
    create(req,res,moodsModel)
}
const updateMood = (req,res) => {
    updateOne(req,res,moodsModel)
}
const deleteMood = (req,res) => {
    deleteOne(req,res,moodsModel)
}

module.exports = {
    getAllMoods,
    getMoodById,
    createNewMood,
    updateMood,
    deleteMood
}