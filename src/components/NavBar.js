import React from "react";
import "../css/NavBar.css"

function NavBar() {
    return (
        <div className="navbar">

            <div className="navbar__item" >About</div>
            <div className="navbar__item" >Trending</div>
            <div className="navbar__item" >Movies</div>
            <div className="navbar__item" >Series</div>
            <div className="navbar__item" >Favourites</div>
            
        </div>

    )
}

export default NavBar