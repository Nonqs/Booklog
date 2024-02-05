import { Outlet, Link } from "react-router-dom"
import "../styles/Navbar.css"

export function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark p-2">
        <div className="container-fluid d-flex ">
          <Link className="navbar-brand p-2 text-light" to="/"><h1>Booknest</h1></Link>
          <div className=" p-2 " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/search">Search book</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/library">My library</Link>
              </li>
              <li className="nav-item dropdown ">
                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><a className="dropdown-item" href="/signup">Signup</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </div>
  )
}