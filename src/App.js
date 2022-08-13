import "./App.css"
import React, { useContext } from "react"
//import { DataContext } from "./Context.js"
import Home from "./pages/Home.js"
import HeroImage from "./components/HeroImage"
import NavBar from "./components/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./pages/Favourites.js"
import About from "./pages/About.js"
import Random from "./pages/Random.js"
import Trending from "./pages/Trending.js"

function App() {

  //const moviesData = useContext(DataContext)

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <HeroImage/>
      </div>


      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/trending" element={<Trending/>} />
        <Route exact path="/random" element={<Random/>} />       
        <Route path="/Favourites" element={<Favourites/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App