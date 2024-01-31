import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { Signup } from "./views/Signup"
import { SearchBook } from "./views/SearchBook"
import { Navbar } from "./components/Navbar"
import { MyLibrary } from "./views/MyLibrary"
import { Login } from "./views/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/library" element={<MyLibrary />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
