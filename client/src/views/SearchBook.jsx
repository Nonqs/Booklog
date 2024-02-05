import { useState } from "react"
import { AddBook } from "../components/AddBook"
import "../styles/SearchBook.css"

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

  return (
    <>
      <div className="position-relative">
        <div className="form-container">
          <h2>Search book</h2>
          <form className="d-flex form" onSubmit={handleSubmit}>
            <input className="form-control w-25 m-1" type="text" value={book} onChange={(e) => setBook(e.target.value)} />
            <button type="submit" className="btn btn-outline-success m-1">Enviar</button>
          </form>
        </div>
        {show && (
          <div className="books-container d-flex flex-wrap">
            {bookData.books && bookData.books.map((book, index) => (
              <div key={index} className="card mb-3 card-container">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src={book.image} className="img-fluid rounded-start" alt="book image" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{book.name}</h5>
                      <p className="card-text">{book.author}</p>
                      <p className="card-text"><small className="text-body-secondary">Total pages: {book.pages}</small></p>
                      <AddBook book={book} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

