import React from 'react';
import {useState} from 'react';

// start with header work down from there
import Header from "./components/Header"
import Card from "./components/Cardwhole/Card"
import Footer from "./components/Footer"
const data = require("./components/Data.js");


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
        console.log(id)
    }

    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });
    function randomArrayShuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
    }

    randomArrayShuffle(movies); 
    console.log(movies)
    
  return (
    <div className="App">
      <Header />  {/*  Header for webstie*/}
      <br />
      <br />
      <br />
      {/* Cardstack here */}
      <section className="card-body">
        <Card movies={movies} onSubToggle={toggleSubjectivity} onPolToggle={togglePolarity}/>
      </section>
      
      
      <br />
      <br />
      <br />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
