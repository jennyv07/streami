import React, {useState, useEffect} from 'react'
import axios from '../axios';
import requests from '../request';
import './Banner.css';

const base_url ="https://image.tmdb.org/t/p/original/";

export const Banner = () => {
    // doing this for the background bar 
    let [ movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            //  now we want to return some random moviews from the array of movies 
            setMovie( request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]);
            return request;
        }
        fetchData()
    }, []);

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
        }
  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
    }}>

    <div className='banner-content'>

    </div>
        {/* title  */}
        <h1 className='banner-title'>
            {/* ? is called optional chaining  */}
            {movie?.title || movie?.name || movie?.original_name}
        </h1>

        {/* div > 2 buttons  */}
        <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>

        </div>

        {/* description  */}
        <h1 className='banner-description'>
         { truncate(movie?.overview, 150)}
        </h1>

        <div className='banner-fadebottom'></div>
    </header>
  )
}; 
