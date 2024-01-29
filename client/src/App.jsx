import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { Form } from "./views/Form"
import { SearchBook } from "./views/SearchBook"
import { Navbar } from "./components/Navbar"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/form" element={<Form />} />
          <Route path="/search" element={<SearchBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
