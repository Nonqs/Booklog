import  Layout from "./pages/Layout"
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <div>
        <h1>Routes</h1>
        <Routes>
          <Route path="/" element={<Layout />}>

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
