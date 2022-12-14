const router = require("express").Router()
const {
    getAllMoods,
    getMoodById,
    createNewMood,
    updateMood,
    deleteMood
} = require("../controllers/moods")

router.get("/",getAllMoods)
router.get("/getById/:id",getMoodById)
router.post("/create",createNewMood)
router.put("/update/:id",updateMood)
router.delete("/delete/:id",deleteMood)


module.exports = router