import './Navbar.css'
import React, { useEffect, useState } from 'react';
const Navbar =()=>{
    let [ show, handleShow] = useState(false);

    // adding event listen to listen to scroll on web page a 100px down the page
    useEffect(() =>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener('scroll')
        }
    }, []);
    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
                src='https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png'
                alt='Netflix Logo'
                className='nav-logo'
            />
        </div>
    )
}
export default Navbar;