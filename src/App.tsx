
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menutems from "./pages/Menutems";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menutems/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
