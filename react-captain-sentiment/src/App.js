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
  console.log(movies)

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
    <div className="App">
      <Header />  {/*  Header for webstie*/}
      <br />
      <br />
      <br />
      {/* Cardstack here */}
      <section className="card-body">
        <Card movies={movies} movieID={currMovieID} onSubToggle={toggleSubjectivity} onPolToggle={togglePolarity} onNext={toggleNext}/>
      </section>
      
      
      <br />
      <br />
      <br />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
