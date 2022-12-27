import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../Context";
import "../css/HeroImage.css"
import { FaHeart, FaStar } from 'react-icons/fa';

function HeroImage() {

    const {likedMovies, addToLikedMovies, fetchedData} = useContext(DataContext)

    const movie = fetchedData[0]
    const background = `https://image.tmdb.org/t/p/original${movie?.backdrop}`
    // const poster = `https://image.tmdb.org/t/p/original${movie.poster}`


    return (
        <div className='hero'>
            
            <div className="hero__background">
                <img src={background} alt="movie background" />
            </div>

            <div className="hero__elements"> 
                <div className="hero__info">

                    <div className="rating-and-heart-container">
                        <p className="release-date">{movie?.release_date.slice(0,4)}</p>
                        <div className='hero__rating'>
                            <div><FaStar color='white'/></div>
                            <span>{movie?.rating.toFixed(1)}</span>
                        </div>

                        <div className='hero__heart'onClick={() => addToLikedMovies(movie, likedMovies)}>
                            {   //check if movie is in likedMovies
                                !likedMovies.some(movieObj => movieObj.id === movie?.id) ? 
                                    <FaHeart color='rgba(225,225,225, 0.3)'/> 
                                    : 
                                    <FaHeart color='white'/>
                            }
                        </div>   

                    </div>
                        <h3 className="title">{movie?.title}</h3>
                        <p className="overview">{movie?.overview}</p>
                        <div className="container">       
                    </div>

                </div>
            
            </div>

        </div>
    )
}

export default HeroImage