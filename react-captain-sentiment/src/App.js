import React from 'react';
import * as d3 from "d3";
import data from './test_csv.csv';

// start with header work down from there
import Header from "./components/Header"
import Cardstack from "./components/Cardstack"
import Footer from "./components/Footer"


// overwrittable global vars to avoid local unpackData var problems
let name;
let polarityLabels;
let lengthData;
let subjectivityLabels;

function unpackData(movie){
    name = movie.map(function(d){
        return d.Name
    });
    polarityLabels = movie.map(function(d) {
        return d.Polarity;
    });
    lengthData = movie.map(function(d) {
        return +d.Length;
    });
    subjectivityLabels = movie.map(function(d) {
      return d.Subjectivity
    })
    // return [name, polarityLabels, lengthData, subjectivityLabels]
}

function App() {
    d3.csv(data).then(unpackData)
    //test data
    // * fill later with an all gather function *
    
    const movies = [
      {
        id: 1,
        movieName: "Ant-Man 2015",
        polarity: polarityLabels,
        subjectivty: subjectivityLabels,
        lengthData: lengthData,
        moviePoster: "https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
      }
      // {
      //   id: 1,
      //   movieName: "Ant-Man 2015",
      //   polarity: unpackedData[1],
      //   subjectivty: unpackedData[3],
      //   lengthData: unpackedData[2],
      //   moviePoster: "https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
      // }
    ]
    console.log(movies)
  return (

    <div className="App">
      <Header />  {/*  Header for webstie*/}
      <Cardstack movies={movies} /> { /* big card stack */}
      <Footer />
    </div>
  );
}

export default App;
