const usersModel = require("../models/users")
const {
    getAll
} = require("./main")

const getAllUsers = (req, res) => {
    getAll(req,res,usersModel)
}
const createNewUser = async (req,res) => {
    await usersModel.insertMany(req.body.user)
    .then(()=>{
        res.status(200).json({success:true, message:"user added successfully"})
    })
    .catch(err=>{res.status(400).json({success:false,err})})
}


module.exports = {
    getAllUsers,
    createNewUser
}