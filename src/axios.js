// every single request has same starting url with is the baseURl 

import axios from 'axios';

// our baseURL using axios instance 
const instance = axios.create({
    // so anytime we use instance.get, it appends this instance to a get url 
    baseURL: "https://api.themoviedb.org/3",
})

export default instance;