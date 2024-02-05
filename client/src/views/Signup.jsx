import { useState } from "react"
import { Navigate } from "react-router-dom"
import axios from "axios"

export function Signup() {

  const [user, setUser] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirm, setConfirm] = useState()
  const [err, setErr] = useState()
  const [success, setSuccess] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      const response = await axios.post("http://localhost:3000/signup", {

        user,
        email,
        password,
        confirm,

      })

      setSuccess(true)
      
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response) {
        setErr(error.response.data)
      }

    }
  }

  return (
    <>
      <div className="container mt-5">
        <div className="text-center w-100">
          <form onSubmit={handleSubmit} className="form">
            <div className="w-25 d-flex flex-column bg-body-tertiary p-4 rounded-4 shadow p-3 mb-5">
              <h2>Signup</h2>

              <label className="form-label" htmlFor="email"> Email: </label>
              <input className="form-control" type="text" name="email" onChange={(e) => setEmail(e.target.value)} />

              <label className="form-label" htmlFor="username"> Username: </label>
              <input className="form-control" type="text" name="username" onChange={(e) => setUser(e.target.value)} />

              <label className="form-label" htmlFor="password"> Password: </label>
              <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} />

              <label className="form-label" htmlFor="confirm"> Confirm Password: </label>
              <input className="form-control" type="password" name="confirm" onChange={(e) => { setConfirm(e.target.value); setErr() }} />

              <button type="submit" className="btn btn-primary mb-3 mt-3" onClick={handleSubmit}>Signup</button>
              {err &&
                <div className="alert alert-danger w-100" role="alert">
                  {err}
                </div>
              }
            </div>
          </form>
        </div>
      </div>
      {success &&
      <Navigate to="/library" />
      }
    </>
  )
}
