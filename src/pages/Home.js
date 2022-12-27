import React, { useContext } from "react"
import { DataContext } from "../Context.js"
import Card from "../components/Card.js"
import HeroImage from "../components/HeroImage.js"

function Home() {

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
    <div>

      <HeroImage/>

      <div className='home'>
        <div className='home__container'>
          {movies}    
        </div>
      </div>
    </div>

  )
}

export default Home