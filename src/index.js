const express = require("express")
const cors = require("cors")

const app = express()

// Midlewares

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

// Routes

app.use(require("./routes/index.js"))

// Server Listen

app.listen(3000)
console.log("server listen")