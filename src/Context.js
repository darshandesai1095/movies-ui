import {createContext, useState, useEffect} from "react"

const DataContext = createContext()

function ContextProvider(props) {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedData, setFetchedData] = useState([]) //movie data
    const [likedMovies, setLikedMovies] = useState([]) // liked movies [{},{},{}]
    const [genre, setGenre] = useState("")
    const [path, setPath] = useState("/trending/movie/week")

    const apiKey = '251d597b730b91e70350d6474689f699'
    //const path = '/discover/movie'
    const url = `https://api.themoviedb.org/3${path}?api_key=${apiKey}${genre}`

    //const path = 'trending/movie/week'
    //const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}`

    //const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}&with_genres=${genre}`
  
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

    }, [genre, url])

    const addToLikedMovies = (movie, likedMovies) => {
      // when id is in array remove it, else add it
      if (likedMovies.some(movieObj => movieObj.id === movie.id)) {
        setLikedMovies(prev => prev.filter(movieObj => movieObj.id !== movie.id))
      } else {
        setLikedMovies(prev => [...prev, movie])
      }
    }
    
    const setURL = (ID, isGenre) => {
      if (isGenre) {
        setPath('/discover/movie')
        setGenre(`&with_genres=${ID}`)
      } else {
        setPath('/trending/movie/week')
        setGenre("")
      }


      isGenre ? setGenre(`&with_genres=${ID}`) : setGenre("")
    }
    
    return (
        <DataContext.Provider value={{fetchedData, likedMovies, addToLikedMovies, setURL, genre}}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, ContextProvider}