const express = require("express")
const pool = require("../database")
const passport = require("passport")
const data  = require("../function/data")
const { isLogedIn, isNotLogedIn } =require("../lib/auth")

const router = express.Router()

router.get("/library", async(req, res)=>{  

    const books = await pool.query("SELECT * FROM books ")
    const stats = await data(books)

    console.log(stats)

    res.send({books, stats})
})


module.exports = router