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
    const options = [
      { value: "Black Panther", label: 1 },
      { value: "Morbius", label: 2},
      { value: "Ant-Man", label: 3 },
      { value: "Black Widow", label: 4 },
      { value: "Eternals", label: 5 },
      { value: "The Avengers", label: 6 },
      { value: "Thor", label: 7 },
      { value: "Iron Man 3", label: 8 },
      { value: "Spider-Man Homecoming", label: 9 },
      { value: "Avengers Endgame", label: 10 },
      { value: "The Incredible Hulk", label: 11 },
      { value: "Avengers Infinity War", label: 12 },
      { value: "Avengers Age of Ultron", label: 13 },
      { value: "Captain Marvel", label: 14 },
      { value: "Iron Man 2", label: 15 },
      { value: "Guardians of the Galaxy", label: 16 },
      { value: "Captain America The Winter Soldier", label: 17 },
      { value:  "Thor Ragnarok", label: 18 },
      { value: "Shang-Chi and the Legend of the Ten Rings", label: 19 },
      { value: "Spider-Man No Way Home", label: 20 },
      { value: "Iron Man", label: 21 },
      { value: "Thor The Dark World", label: 22 },
      { value: "Spider-Man Far from Home", label: 23 },
      { value: "Captain America Civil War", label: 24 },
      { value: "Guardians of the Galaxy Vol. 2", label: 25 },
      { value: "Doctor Strange in the Multiverse of Madness", label: 26 },
      { value: "Captain America: The First Avenger", label: 27 },
      { value: "Doctor Strange", label: 28 },
      { value: "Ant-Man and the Wasp", label: 29 },
    ]

    const toggleSelect = (id) => {
      // add drop down menu to select at whim
      console.log(id)
    }

    
  return (
    <section className="gradient">
      <section className="header-top-margin"/>
      <section className="header-container">
        <Header />  {/*  Header for webstie*/}
      </section>
      <section className="header-bottom-margin"/>
      <section className="back-top"/>
      <br />
      
      {/* Cardstack here */}
      <section className="card-body">
        <Card movies={movies} movieID={currMovieID} onSubToggle={toggleSubjectivity} onPolToggle={togglePolarity} onNext={toggleNext} toggleSelect={toggleSelect}/>
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
