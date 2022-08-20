import "./App.css"
import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { DataContext } from "./Context.js"

//components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

//pages
import Home       from "./pages/Home.js"
import Categories from "./pages/Categories.js"
import Favourites from "./pages/Favourites.js"
import About      from "./pages/About.js"
import Upcoming   from "./pages/Upcoming.js"

function App() {

  //const moviesData = useContext(DataContext)

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>

        <Routes>
          <Route exact path="/"     element={<Home/>} />
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/Upcoming"   element={<Upcoming/>} />       
          <Route path="/Favourites" element={<Favourites/>} />
          <Route path="/About"      element={<About/>} />
        </Routes>


        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App