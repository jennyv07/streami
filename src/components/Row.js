import React, {useState, useEffect } from 'react';
import axios from '../axios';
// import requests from '../request';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url ="https://image.tmdb.org/t/p/original/";
// using state to keep tract of this movies, its a way to write variables in react 
const Row = ({ title, fetchUrl, isLargeRow }) => {
  // const movieTrailer = require( 'movie-trailer' )
    // a variable =  to contain a list of empty movies 
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    // A snippet of code which runs based on a specific conditions/ variables 
    // want to pull from the api when it loads
    useEffect(() =>{

        // if [] we are saying run once when the row loads and dont run again 
        // how to use asyn in a useEffect 
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            // console.log('request', request)
            setMovies(request.data.results);
            return request;

        }
        fetchData();
        // let it load anytime it updates 
        // using UseEffect ast componentDidupdate 
    }, [fetchUrl]);
    // console.log(movies)
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    const handleClick = (movie) => {
      // the if handle the open and close for tariler preview 
      if(trailerUrl){
        setTrailerUrl('');
      }else{        
        movieTrailer(movie?.name || "")
        .then((url) =>{          
          const urlParams = new URLSearchParams( new URL(url).search);
          setTrailerUrl(urlParams.get('v')); 
        })
        .catch(err => console.log(err))
      }

    };
  return ( <div className='row'>
        {/* BEM naming conventions */}
        <h2>{title}</h2>
        <div className='row-posters'>
            { movies.map((movie) => (
            <img key={movie.id}
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
             src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`}  alt={movie.name} 
            onClick={() => handleClick(movie)} />
        ))}

        </div>
       { trailerUrl &&  <YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  )
}

export default Row;