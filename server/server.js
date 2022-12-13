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

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cors())

const usersRouter = require("./routes/users")
const feelingsRouter = require("./routes/feelings")


app.get("/", (req, res) => {
    res.send({message: "succses"})
})
app.use("/api/feelings",feelingsRouter)
app.use("/api/users",usersRouter)


app.listen(port, ()=>{
    console.log(`server is connect on port: ${port}`);
})


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    })
}