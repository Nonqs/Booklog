const express = require("express")
const morgan = require("morgan")
const path = require("path")
const flash = require("connect-flash")
const session = require("express-session")
const mySQLStore = require("express-mysql-session")(session)
const passport = require("passport")


const app = express()
require("./lib/passport.js")
const cors = require("cors")
const { database } = require("./keys")

// Midlewares


app.use(session({
    secret: "booksession",
    resave: false,
    saveUninitialized:false,
    store: new mySQLStore(database)
}))
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors(
   { origin: "http://localhost:5173",}
))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

// Routes

app.use(require("./routes/index.js"))
app.use(require("./routes/profile.js"))
app.use("/search", require("./routes/books.js"))


// Global variables

// Server Listen

app.listen(3000)
console.log("server listen")