const {
    usersModel
} = require("../models/users")
const {
    getAll,
    getById,
    create,
    updateOne,
    deleteOne
} = require("./main")


const getAllUsers = (req, res) => {
    getAll(req, res, usersModel,"moods")
}
const getUserById = (req, res) => {
    getById(req, res, usersModel)
}
const createNewUser = (req, res) => {
    create(req, res, usersModel)
}
const updateUser = (req, res) => {
    updateOne(req, res, usersModel)
}
const deleteUser = (req, res) => {
    deleteOne(req, res, usersModel)
}


module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
}