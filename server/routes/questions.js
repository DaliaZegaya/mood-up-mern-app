const router = require("express").Router()
const {
    getAllQuestions,
    getQuestionById,
    createNewQuestion,
    updateQuestion,
    deleteQuestion
} = require("../controllers/questions")

router.get("/",getAllQuestions)
router.get("/getById/:id",getQuestionById)
router.post("/create",createNewQuestion)
router.put("/update/:id",updateQuestion)
router.delete("/delete/:id",deleteQuestion)


module.exports = router