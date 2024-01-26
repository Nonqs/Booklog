import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { Form } from "./views/Form"
import { SearchBook } from "./views/SearchBook"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>p</h1>}>
          <Route path="/form" element={<Form />} />
          <Route path="/book" element={<SearchBook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
