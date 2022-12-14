const router = require("express").Router()
const {
    getAllQuotes,
    getQuoteById,
    createNewQuote,
    updateQuote,
    deleteQuote
} = require("../controllers/quotes")

router.get("/",getAllQuotes)
router.get("/getById/:id",getQuoteById)
router.post("/create",createNewQuote)
router.put("/update/:id",updateQuote)
router.delete("/delete/:id",deleteQuote)


module.exports = router