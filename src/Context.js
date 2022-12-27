import {createContext, useState, useEffect} from "react"

const DataContext = createContext()

function ContextProvider(props) {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [fetchedData, setFetchedData] = useState([]) //movie data

    const apiKey = '251d597b730b91e70350d6474689f699'
    const [path, setPath] = useState("trending/movie/week")
    const [genre, setGenre] = useState("")
    const [movieName, setMovieName] = useState("")
    const url = `https://api.themoviedb.org/3/${path}?api_key=${apiKey}${genre}${movieName}`


    //////////////////////////////////////////////////////////////////
    /////////////////////////// LIKED MOVIES /////////////////////////
    //////////////////////////////////////////////////////////////////

    const [likedMovies, setLikedMovies] = useState(JSON.parse(localStorage.getItem("likedMovies")) || [])

    const addToLikedMovies = (movie, likedMovies) => {
      // when id is in array remove it, else add it
      if (likedMovies.some(movieObj => movieObj.id === movie.id)) {
        setLikedMovies(prev => prev.filter(movieObj => movieObj.id !== movie.id))
      } else {
        setLikedMovies(prev => [...prev, movie])
      }
    }

    useEffect(() => {
      window.localStorage.setItem("likedMovies", JSON.stringify(likedMovies))
    }, [likedMovies])

  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////

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
          console.log(fetchedData)
        }).catch((err) => {
          setError(err)
          console.log(error)
        })

    }, [path, genre, movieName])
    
    const updateUrlParams = (moviePath, movieGenre="", movieName="") => {
      setPath(moviePath)
      setGenre(movieGenre)
      setMovieName(movieName)
    }
    
    return (
        <DataContext.Provider value={{fetchedData, likedMovies, addToLikedMovies, updateUrlParams}}>
            {props.children}
        </DataContext.Provider>
    )
}

export {DataContext, ContextProvider}

{/*

  ---BASE---                        ---PATH---                ---API KEY---           ---GENRE/MOVIE---

  MOVIE BY GENRE
  https://api.themoviedb.org/3/     discover/movie            ?api_key=${apiKey}      &with_genres=${genre}

  MOVIE BY TRENDING (WEEK)
  https://api.themoviedb.org/3/     trending/movie/week       ?api_key=${apiKey}

  UPCOMING MOVIES
  https://api.themoviedb.org/3/     movie/upcoming            ?api_key=${apiKey}

  VIDEOS
  https://api.themoviedb.org/3/     movie/{movie_id}/videos   ?api_key=${apiKey}

  SEARCH
  https://api.themoviedb.org/3/     search/movie              ?api_key=${apiKey}      &query=${movieName}   

*/
}