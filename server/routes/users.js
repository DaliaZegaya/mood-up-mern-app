const router = require("express").Router()
const {
    getAllUsers,
    createNewUser
} = require("../controllers/users")
const {
    signUp,
    signIn
} = require("../middleware/accsess")

router.get("/",getAllUsers)
router.post("/createNewUser",createNewUser)
router.post('/signUp', signUp)
router.post('/signIn', signIn)


module.exports = router