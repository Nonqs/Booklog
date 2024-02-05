const express = require("express")
const searchBook = require("../externalApi.js")
const pool = require("../database")

const router = express.Router()

router.post("/", async(req,res)=>{

    const { book } = req.body

    try {
        
        const books = await searchBook(book)

        res.json({ books })

    } catch (error) {

        res.status(500).json({ message: 'Error searching books' })

    }

})


router.post("/add", async(req, res) => {

    const { bookName, bookImg, bookPages, state, rating, pages, author } = req.body;

    const saveBook = {

        title: bookName,
        image_url: bookImg,
        total_pages: bookPages,
        author,
        state,
        rating,
        pages_read: pages
    }

    console.log(saveBook)

    await pool.query("INSERT INTO books set ?", [saveBook])
   
})


module.exports = router