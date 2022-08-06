import React from "react";
import "../css/NavBar.css"

function NavBar() {
    
    return (
        <div className="navbar">

            <div className="navbar__item" >Trending</div>
            <div className="navbar__item" onMouseOver={()=>console.log('mouseOver')}>Categories</div>     
            <div className="navbar__item" >Random</div>
            <div className="navbar__item" >Favourites</div>
            <div className="navbar__item" >About</div>
            
        </div>

    )
}

export default NavBar