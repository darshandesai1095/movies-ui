import React, { useContext } from "react"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"

function Movies() {

  const moviesData = useContext(DataContext).fetchedData

  const movies = moviesData.map((movie, i) => {
      if (i !== 0) {
        return (
            <Card
                key = {movie.id}
                movie = {movie}
            />
          )
      }
  })

  return (
    <div className='home'>
        <div className='home__container'>
            {movies}    
        </div>
    </div>
  )
}

export default Movies