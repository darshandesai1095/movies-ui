import React, { useContext } from "react"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"
import "../App.css"


function SearchPage() {

const moviesData = useContext(DataContext).fetchedData

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
        {movies.length >= 1 ? movies : <div className="about">No movies found</div>}
      </div>
    </div>
  )
}

export default SearchPage