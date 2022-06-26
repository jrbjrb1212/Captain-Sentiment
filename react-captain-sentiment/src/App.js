import React from 'react';
import {useState} from 'react';

// start with header work down from there
import Header from "./components/Header"
import Card from "./components/Cardwhole/Card"
import Footer from "./components/Footer"
const data = require("./components/Data.js");
let currMovieID = 0


function App() {

  const [movies, setMovies] = useState(data.movieData)

  const toggleSubjectivity = (id) => {
      // setMovies(movies.map((movie) => movie.id === id ? console.log(movie.id) : movie))
      // this works
      setMovies(movies.map((movie) => movie.id === id ? { ...movie, subjectivtyToggle: false, polarityToggle: true} : movie))
      }

    const togglePolarity = (id) => {
        setMovies(movies.map((movie) => movie.id === id ? { ...movie, subjectivtyToggle: true, polarityToggle: false} : movie))
    }

    const toggleNext = (id) => {
      currMovieID === movies.length-1 ? currMovieID = 0 : currMovieID++ 
      setMovies(movies.map((movie) => movie.id === id ? movie : movie))
    }
    
  return (
    <section>
      <section className="header-top-margin"/>
      <section className="header-container">
        <Header />  {/*  Header for webstie*/}
      </section>
      <section className="header-bottom-margin"/>
      <section className="back-top"/>
      <br />
      
      {/* Cardstack here */}
      <section className="card-body">
        <Card movies={movies} movieID={currMovieID} onSubToggle={toggleSubjectivity} onPolToggle={togglePolarity} onNext={toggleNext}/>
      </section>
      <br className="gradient"/>
      <section className="back-bottom"/>
      <section>
        <Footer />
      </section>
      
    </section>
  );
}

export default App;
