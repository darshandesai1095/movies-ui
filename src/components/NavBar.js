import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"
import { Link } from "react-router-dom";

function NavBar() {

    const {updateUrlParams, likedMovies} = useContext(DataContext)
    const [hovered, setHovered] = useState(false)
    const [genre, setGenre] = useState(null)

    const categories = categoriesData.map(category => (
        <p  key={category.ID}
            className={`category__item`}
            onClick={() => updateUrlParams("discover/movie", `&with_genres=${category.ID}`)}>
                {category.Category}
        </p>
    ))

    
    return (
        <div className="navbar">

            <Link to="/" className="navbar__item">
                <div onClick={() => updateUrlParams("trending/movie/week")}>
                    Trending
                </div>
            </Link>

            <Link to="/Categories" className="navbar__item">
                <div 
                    onMouseEnter={()=>setHovered(true)}
                    onMouseLeave={()=>setHovered(false)}
                    onClick={()=>setHovered(false)}>
                        Categories
                        {hovered && <p className="categories">{categories}</p>}
                </div>
            </Link>   

            <Link to="/Upcoming" className="navbar__item">
                <div onClick={() => updateUrlParams("movie/upcoming")}>
                    Upcoming
                </div>
            </Link>
            
            <Link to="/Favourites" className="navbar__item">
                <div>
                    Favourites
                </div>
            </Link>
        
            <Link to="/About" className="navbar__item">
                <div>About</div>
            </Link>
            
        </div>

    )
}

export default NavBar