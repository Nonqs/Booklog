import { useState } from "react"
import axios from "axios"

export function Login() {

  const [user, setUser] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post("http://localhost:3000/login", {

          user,
          password,

      })

  } catch (error) {
      console.error("Error saving book:", error);
  }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="text-center w-100">
          <form onSubmit={handleSubmit} className="form">
            <div className="w-25 d-flex flex-column bg-body-tertiary p-4 rounded-4 shadow p-3 mb-5">
              <h2>Login</h2>

              <label className="form-label" htmlFor="username"> Username: </label>
              <input className="form-control" type="text" name="username" onChange={(e) => setUser(e.target.value)} />

              <label className="form-label" htmlFor="password"> Password: </label>
              <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

              <button type="submit" className="btn btn-primary mb-3 mt-3" onClick={handleSubmit}>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
