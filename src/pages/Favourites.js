import React, { useContext } from "react"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"


function Favourites() {

const moviesData = useContext(DataContext).likedMovies

  const movies = moviesData.map((movie) => {
    return (
        <Card
            key = {movie.id}
            movie = {movie}
        />
        )
  })

  return (
    <div className='home'>
      <div className='home__container'>
        {movies.length === 0 ? <p className="favourites-message">No movies favourited yet</p> : movies}
      </div>
    </div>
  )
}

export default Favourites