import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"
import { Link } from "react-router-dom";

function NavBar() {

    const {setURL, genre} = useContext(DataContext)
    const [hovered, setHovered] = useState(false)

    const categories = categoriesData.map(category => (
        <p  key={category.ID}
            className={`category__item  ${genre===category.ID && 'red'}`}
            onClick={() => setURL(category.ID, true)}>
            {category.Category}
        </p>
    ))

    
    return (
        <div className="navbar">

            <Link to="/">
            <div><p className="navbar__item"
                    onClick={() => setURL(null, false)}>
                Home
                </p>
            </div>
            </Link>

            <Link to="/Categories">
            <div 
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
                onClick={()=>setHovered(false)}>

                    <p className="navbar__item">Categories
                        {hovered && <p className="category">{categories}</p>}
                    </p>
            </div>
            </Link>   

            <Link to="/Random">
            <div><p className="navbar__item" >Random</p></div>
            </Link>
            
            <Link to="/Favourites">
                <div><p className="navbar__item" >Favourites</p></div>
            </Link>
        
            <Link to="/About">
            <div><p className="navbar__item" >About</p></div>
            </Link>
            
        </div>

    )
}

export default NavBar