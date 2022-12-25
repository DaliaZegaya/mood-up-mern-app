const dotenv = require("dotenv");
dotenv.config()

const express = require("express")
const cors = require("cors")
const path = require("path")
require("./DB/db")
const passport = require('passport')
require('./config/passport')(passport)

const app = express()
const port = process.env.PORT || 8000

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const {
    validateUserSchema
} = require("./middleware/schemas")
const usersRouter = require("./routes/users")
const moodsRouter = require("./routes/moods")
const questionsRouter = require("./routes/questions")
const quotesRouter = require("./routes/quotes")
const busniessClientsRouter = require("./routes/busniess-clients")
const couponsRouter = require("./routes/coupons")


app.get("/", (req, res) => {
    res.send({ message: "succses" })
})

app.use("/api/moods", moodsRouter)
app.use("/api/users", validateUserSchema, usersRouter)
app.use("/api/questions", questionsRouter)
app.use("/api/quotes", quotesRouter)
app.use("/api/busniessClients", busniessClientsRouter)
app.use("/api/coupons", couponsRouter)


app.listen(port, () => {
    console.log(`server is connect on port: ${port}`);
})


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    })
}