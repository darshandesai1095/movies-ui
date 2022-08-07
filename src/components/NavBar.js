import { useState, useContext } from "react"
import "../css/NavBar.css"
import categoriesData from "../data/CategoriesData.js"
import { DataContext } from "../Context.js"

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

            <div><p className="navbar__item"
                    onClick={() => setURL(null, false)}>
                Trending
                </p>
            </div>

            <div 
                onMouseEnter={()=>setHovered(true)}
                onMouseLeave={()=>setHovered(false)}
                onClick={()=>setHovered(false)}>

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