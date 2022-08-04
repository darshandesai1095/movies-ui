import "./App.css"
import React, { useContext } from "react"
//import { DataContext } from "./Context.js"
import Home from "./pages/Home.js"
import HeroImage from "./components/HeroImage"
import NavBar from "./components/NavBar"

function App() {

  //const moviesData = useContext(DataContext)

  return (
    <div className="app">
<NavBar/>
{<HeroImage/>
}
<Home/>
      {            //
            //
            //<Home/>
      }
    </div>
  )
}

export default App