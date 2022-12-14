const router = require("express").Router()
const {
    getAllBusniessClients,
    getBusniessClientById,
    createNewBusniessClient,
    updateBusniessClient,
    deleteBusniessClient
} = require("../controllers/busniess-clients")

router.get("/",getAllBusniessClients)
router.get("/getById/:id",getBusniessClientById)
router.post("/create",createNewBusniessClient)
router.put("/update/:id",updateBusniessClient)
router.delete("/delete/:id",deleteBusniessClient)


module.exports = router