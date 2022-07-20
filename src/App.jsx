import './App.css';
import React from 'react'
// import instance from './axios';
import Banner from './components/Banner';
import Nav from './components/Navbar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div className="app">
      {/* Nav bar */}
      <Nav />

      {/* banner  */}
      <Banner />

      <Row isLargeRow title='NETFLIX ORIGINAL'  fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='TRENDING NOW' fetchUrl={requests.fetchTrending}  />
      <Row title='TOP RATED' fetchUrl={requests.fetchTopRated}  />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}  />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}  />
      <Row title='Horror MOvies' fetchUrl={requests.fetchHorrorMovies}  />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}  />
      <Row title='Documentries' fetchUrl={requests.fetchDocumentries}  />






    </div>
  );
}

export default App;
