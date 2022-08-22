import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';

function NavBar() {

    const {updateUrlParams, likedMovies} = useContext(DataContext)
    const [isCategoriesHovered, setIsCategoriesHovered] = useState(false)
    const [genre, setGenre] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchActivated, setIsSearchActivated] = useState(false)

    const categories = categoriesData.map(category => (
        <p  key={category.ID}
            className={`category__item`}
            onClick={() => updateUrlParams("discover/movie", `&with_genres=${category.ID}`)}>
                {category.Category}
        </p>
    ))


    
    return (
        <div className="navbar">

            <div className="primary__navbar">

                <Link to="/" className="navbar__item">
                    <div onClick={() => updateUrlParams("trending/movie/week")}>
                        Trending
                    </div>
                </Link>

                <Link to="/Categories" className="navbar__item">
                    <div 
                        onMouseEnter={()=>setIsCategoriesHovered(true)}
                        onMouseLeave={()=>setIsCategoriesHovered(false)}
                        onClick={()=>setIsCategoriesHovered(false)}>
                            Categories
                            {isCategoriesHovered && <p className="categories">{categories}</p>}
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


            <div className="search-icon">
                <FaSearch 
                            onClick={() => setIsSearchActivated(prev => !prev)}
                            color={isSearchActivated ? "#FE6D73" : "white"}
                />
            </div>


            {
                isSearchActivated &&

                <div className="secondary__navbar">
                    <form>
                        <input  
                            className={`search-box`}
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>

            }



        </div>
            

    )
}

export default NavBar