const router = require("express").Router()
const {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    deleteUser
} = require("../controllers/users")
const {
    signUp,
    signIn
} = require("../middleware/accsess")


router.get("/",getAllUsers)
router.get("/getById/:id",getUserById)
// router.post("/create",createNewUser)
router.post("/signUp",signUp)
router.post("/signIn",signIn)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)


module.exports = router