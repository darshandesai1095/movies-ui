import React, { useState, useContext } from 'react'
import { DataContext } from "../Context.js"
import "../css/Card.css"
import { FaHeart, FaInfoCircle, FaStar } from 'react-icons/fa';


function Card({movie}) {

    const [infoRequested, setInfoRequested] = useState(false)
    const {toggleHeart, myLikes, likedMovies, addToLikedMovies} = 
        useContext(DataContext)
    const url =
        `https://image.tmdb.org/t/p/original${movie.poster}`
        

    return (
        <div className='card'>

            <div className='card__image'>
                {infoRequested && <div className='card__overview'><p>{movie.overview}</p></div>}
                <img className='card__poster' src={url} alt="film poster"/>
                <div  className='card__heart'
                onClick={() => addToLikedMovies(movie, likedMovies)}>
                    {
                        !myLikes.includes(movie.id) ? 
                            <FaHeart color='rgba(225,225,225, 0.3)'/> 
                            : 
                            <FaHeart color='#ef233c'/>
                    }
                </div>
            </div>

            <div className='card__footer'>
                <h3 className='card__title'>
                    {movie.title}
                </h3>

                <div className='card__rating-and-info'>

                    <div className='card__rating'>
                        <div><FaStar color='#fdc500'/></div>
                        <span>{movie.rating.toFixed(1)}</span>
                    </div>  
                    <div    className='card__info-icon'
                            onMouseEnter={() => setInfoRequested(true)}
                            onMouseLeave={() => setInfoRequested(false)}>
                        {<FaInfoCircle/>}
                    </div>  

                </div>

            </div>

        </div>
    )
}

export default Card