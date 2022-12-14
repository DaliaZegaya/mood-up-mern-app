const quotesModel = require("../models/quotes")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")

const getAllQuotes = async (req, res) => {
    getAll(req,res,quotesModel)
}
const getQuoteById = (req,res) => {
    getById(req,res,quotesModel)
}
const createNewQuote = (req,res) => {
    create(req,res,quotesModel)
}
const updateQuote = (req,res) => {
    updateOne(req,res,quotesModel)
}
const deleteQuote = (req,res) => {
    deleteOne(req,res,quotesModel)
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    createNewQuote,
    updateQuote,
    deleteQuote
}