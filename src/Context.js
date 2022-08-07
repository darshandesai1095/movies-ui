import {createContext, useState, useEffect} from "react"

const DataContext = createContext()

function ContextProvider(props) {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedData, setFetchedData] = useState([]) //movie data
    const [likedMovies, setLikedMovies] = useState([]) // liked movies [{},{},{}]
    const [genre, setGenre] = useState(16)
  
    const apiKey = '251d597b730b91e70350d6474689f699'
    //const path = 'trending/movie/week'
    //const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}`
    const path = 'discover/movie'
    const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&with_genres=${genre}`
  
    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (res.status >= 200 && res.status <= 299) {
            return res.json()
          } else {
            throw Error(res.statusText)
          }
        })
        .then((jsonResponse) => {
          setIsLoaded(true)
          //setItems(jsonResponse)
          //console.log(jsonResponse)
          // create a movies object with clicked, favourited, etc.
          const moviesData = jsonResponse.results.map((movie) => {
              return (
                {
                    id: movie.id,
                    title: movie.original_title,
                    overview: movie.overview,
                    release_date: movie.release_date,
                    backdrop: movie.backdrop_path,
                    poster: movie.poster_path,
                    rating: movie.vote_average,
                }
              )
          })
          setFetchedData(moviesData) //to display movies
          //setMyMovies(moviesData) //saved movies + cleanup function used
        }).catch((err) => {
          setError(err)
          console.log(error)
        })

    }, [genre])

    const addToLikedMovies = (movie, likedMovies) => {
      // when id is in array remove it, else add it
      if (likedMovies.some(movieObj => movieObj.id === movie.id)) {
        setLikedMovies(prev => prev.filter(movieObj => movieObj.id !== movie.id))
      } else {
        setLikedMovies(prev => [...prev, movie])
      }
    }
    
    const goToCategory = (ID) => {
      setGenre(ID)
    }
    
    return (
        <DataContext.Provider value={{fetchedData, likedMovies, addToLikedMovies, goToCategory}}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, ContextProvider}