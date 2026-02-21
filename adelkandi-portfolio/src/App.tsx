import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from './pages/Hero'


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Hero />}/>
      </Routes>
    </Router>
    {/* <Navbar /> */}
    </>
  )
}

export default App
