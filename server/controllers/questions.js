const questionsModel = require("../models/questions")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")

const getAllQuestions = async (req, res) => {
    getAll(req,res,questionsModel)
}
const getQuestionById = (req,res) => {
    getById(req,res,questionsModel)
}
const createNewQuestion = (req,res) => {
    create(req,res,questionsModel)
}
const updateQuestion = (req,res) => {
    updateOne(req,res,questionsModel)
}
const deleteQuestion = (req,res) => {
    deleteOne(req,res,questionsModel)
}

module.exports = {
    getAllQuestions,
    getQuestionById,
    createNewQuestion,
    updateQuestion,
    deleteQuestion
}