import "./App.css"
import React, { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

//pages
import Home       from "./pages/Home.js"
import Categories from "./pages/Categories.js"
import Favourites from "./pages/Favourites.js"
import About      from "./pages/About.js"
import Upcoming   from "./pages/Upcoming.js"
import SearchPage from "./pages/SearchPage.js"

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
          <Route path="/Search"     element={<SearchPage/>} />
        </Routes>


        <Footer/>

      </div>
    </BrowserRouter>
  )
}

export default App