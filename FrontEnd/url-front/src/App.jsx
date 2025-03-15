import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import History from "./pages/History";
import './App.css'

function App() {

  return (
    <Router>
       <Navbar/>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
       </Routes>
       <Footer/>
    </Router>
  )
}

export default App
