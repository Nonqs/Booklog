import { useState } from "react"
import { AddBook } from "../components/AddBook"

export function SearchBook() {

  const [book, setBook] = useState('')
  const [bookData, setBookData] = useState()
  const [show, setShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3000/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ book }),
    })

    const data = await response.json()
    setBookData(data)
    setShow(true)

  }

  const handleClick = (book) =>{

    console.log(book)

  }

  return (
    <>
      <div>
        <h2>Página de buscar libro</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Libro:
            <input type="text" value={book} onChange={(e) => setBook(e.target.value)} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
      {show && (
        <div>
          <h3>Libros encontrados:</h3>
          {bookData.books && bookData.books.map((book, index) => (
      <div key={index}>
        <h3>{book.name}</h3>
        <p>Páginas: {book.pages}</p>
        <AddBook book={book} /> 
      </div>
    ))}
        </div>
      )}
    </>
  )
}

