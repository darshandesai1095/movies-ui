import { useState, useRef, useEffect } from "react"
import "../css/SearchBar.css"
import { FaSearch } from 'react-icons/fa';

function SearchBar() {

    const [searchQuery, setSearchQuery] = useState("")
    const [isSearchActivated, setIsSearchActivated] = useState(false)
    
    const inputEl = useRef(null)

    useEffect(() => {
        inputEl.current?.focus()
      }, [isSearchActivated]);

    
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

                    <div >
                        <form>
                            <input 
                                ref = {inputEl} 
                                className={`search-box`}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search Movie..."
                            />
                        </form>
                    </div>    
            
            }
       
        </div>   
    )
}

export default SearchBar