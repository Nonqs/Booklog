const express = require("express")
const searchBook = require("../externalApi.js")

const router = express.Router()

router.get("/form", (req, res)=>{
    res.send("j")
})

router.post('/form', (req, res) => {
    const { usuario } = req.body;
    console.log(usuario)
    res.json({ mensaje: `Usuario recibido: ${usuario}` });
});

router.post("/search", async(req,res)=>{

    const { book } = req.body

    try {
        
        const books = await searchBook(book)

        res.json({ books })

    } catch (error) {

        res.status(500).json({ message: 'Error searching books' })

    }

})

module.exports = router