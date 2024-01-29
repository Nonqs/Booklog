import { useState } from "react"

export function Form() {

  const [usuario, setUsuario] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch('http://localhost:3000/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <>
      <div>
        <h2>Página del formulario</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Usuario:
            <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </>
  )
}

