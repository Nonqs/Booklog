import { useState } from "react"

export function SearchBook() {

    const [book, setBook] = useState('')
  
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
      console.log(data)
    }
  
    return (
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
    );
  }
  
