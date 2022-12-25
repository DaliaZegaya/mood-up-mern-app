const busniessClientsModel = require("../models/busniess-clients")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")

const getAllBusniessClients = async (req, res) => {
    getAll(req,res,busniessClientsModel,"coupon")
}
const getBusniessClientById = (req,res) => {
    getById(req,res,busniessClientsModel)
}
const createNewBusniessClient = (req,res) => {
    create(req,res,busniessClientsModel)
}
const updateBusniessClient = (req,res) => {
    updateOne(req,res,busniessClientsModel)
}
const deleteBusniessClient = (req,res) => {
    deleteOne(req,res,busniessClientsModel)
}

module.exports = {
    getAllBusniessClients,
    getBusniessClientById,
    createNewBusniessClient,
    updateBusniessClient,
    deleteBusniessClient
}