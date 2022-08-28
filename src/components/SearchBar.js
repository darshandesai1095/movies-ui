import { useState, useRef, useEffect, useContext } from "react"
import { DataContext } from "../Context.js"
import "../css/SearchBar.css"
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchActivated, setIsSearchActivated] = useState(false)
    
    const inputEl = useRef(null)

    useEffect(() => {
        inputEl.current?.focus()
      }, [isSearchActivated]
    );

    const {updateUrlParams} = useContext(DataContext)
    const navigate = useNavigate()

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault()
            updateUrlParams("search/movie", "", `&query=${searchQuery.replace(/ /g,"+")}`)
            navigate("/Search")
            setIsSearchActivated(false)
            setSearchQuery("")
            
        }
    }
    

    
    return (
        <div    className="search-bar" 
                onMouseLeave={() => setIsSearchActivated(false)}>

                <FaSearch 
                    className="search-icon" 
                    color={isSearchActivated ? "#FE6D73" : undefined}     
                    onMouseEnter={() => setIsSearchActivated(prev => !prev)}
                /> 

            { 
                isSearchActivated &&

                    <div>
                        <form>
                            <input 
                                ref = {inputEl} 
                                className={`search-box`}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Movie..."
                                onKeyDown={handleKeyDown}
                            />
                        </form>
                    </div>    
            
            }
       
        </div>   
    )
}

export default SearchBar