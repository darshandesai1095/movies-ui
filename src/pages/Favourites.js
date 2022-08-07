import React, { useContext } from "react"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"
import "./css/Favourites.css"

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
    <div className='favourites'>
        <div className='favourites__container'>
            {movies}    
        </div>
    </div>
  )
}

export default Favourites