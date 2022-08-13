import React, { useContext } from "react"
import "../css/Favourites.css"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"

function Favourites() {

{/*  const moviesData = useContext(DataContext).likedMovies

  const movies = moviesData.map((movie) => {
    return (
        <Card
            key = {movie.id}
            movie = {movie}
        />
        )
  })
*/}

  return (
    <div className='favourites'>
      TEST PAGE!!!
    </div>
  )
}

export default Favourites