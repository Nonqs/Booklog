const axios = require("axios")

const searchBook = async (search) => {

    if (search === '') return null

    try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCPu_DrFhNqNNYhdG6nJNoLz26lyoVzAxc`)
        const data = await response.data

        const books = data.items;

        if (books) {
            const mappedBooks = books.map(book => ({
                name: book.volumeInfo.title,
                author: book.volumeInfo.authors,
                image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'Sin imagen disponible',
                id: book.id,
                pages: book.volumeInfo.pageCount
            }))

            return mappedBooks

        } else {
            console.log('No se encontraron resultados.')
            return null
        }

    } catch (error) {
        console.error('Error searching books:', error)
        throw new Error('Error searching books')
    }
}

module.exports = searchBook