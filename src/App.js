import "./App.css"
import React, { useContext } from "react"
//import { DataContext } from "./Context.js"
import Home from "./pages/Home.js"
import HeroImage from "./components/HeroImage"
import NavBar from "./components/NavBar"
import { BrowserRouter } from "react-router-dom";

function App() {

  //const moviesData = useContext(DataContext)

  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        {
          <HeroImage/>
        }
        <Home/>
      </div>

        <nav>

        <NavLink to="">Home</NavLink>

        <NavLink to="about">About</NavLink>

        <NavLink to="contact">Contact</NavLink>

      </nav>
      
    </BrowserRouter>
  )
}

export default App