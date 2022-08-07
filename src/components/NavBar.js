import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"

function NavBar() {

    const {goToCategory} = useContext(DataContext)
    const [hovered, setHovered] = useState(false)

    const categories = categoriesData.map(category => (
        <p  className="category__item"
            onClick={() => goToCategory(category.ID)}>
            {category.Category}
        </p>
    ))

    
    return (
        <div className="navbar">

            <div><p className="navbar__item" >Trending</p></div>

            <div 
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}>

                    <p className="navbar__item">Categories
                        {hovered && <p className="category">{categories}</p>}
                    </p>
            </div>   

            <div><p className="navbar__item" >Random</p></div>
            <div><p className="navbar__item" >Favourites</p></div>
            <div><p className="navbar__item" >About</p></div>
            
        </div>

    )
}

export default NavBar