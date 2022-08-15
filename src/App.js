import "./App.css"
import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { DataContext } from "./Context.js"

//components
import NavBar from "./components/NavBar"

//pages
import Home       from "./pages/Home.js"
import Categories from "./pages/Categories.js"
import Favourites from "./pages/Favourites.js"
import About      from "./pages/About.js"
import Random     from "./pages/Random.js"

function App() {

  //const moviesData = useContext(DataContext)

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>

        <Routes>
          <Route exact path="/"     element={<Home/>} />
          <Route path="/categories" element={<Categories/>} />
          <Route path="/random"     element={<Random/>} />       
          <Route path="/Favourites" element={<Favourites/>} />
          <Route path="/about"      element={<About/>} />
        </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App