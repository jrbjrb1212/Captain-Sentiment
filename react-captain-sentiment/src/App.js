import React from 'react';
import * as d3 from "d3";
// import data from './test_csv.csv';

// start with header work down from there
import Header from "./components/Header"
import Cardstack from "./components/Cardstack"
import Footer from "./components/Footer"
// import Data from "./components/Data"
const data = require("./components/Data.js");
console.log(data.movieData)


// overwrittable global vars to avoid local unpackData var problems
// let name;
// let polarityLabels;
// let lengthData;
// let subjectivityLabels;

// function unpackData(movie){
//     name = movie.map(function(d){
//         return d.Name
//     });
//     polarityLabels = movie.map(function(d) {
//         return d.Polarity;
//     });
//     lengthData = movie.map(function(d) {
//         return +d.Length;
//     });
//     subjectivityLabels = movie.map(function(d) {
//       return d.Subjectivity
//     })
//     // return [name, polarityLabels, lengthData, subjectivityLabels]
// }

function App() {
    // d3.csv(data).then(unpackData)
    //test data
    // * fill later with an all gather function *
    
    // console.log(<data />)
  return (

    <div className="App">
      <Header />  {/*  Header for webstie*/}
      {/* <Cardstack movies={movies} /> { /* big card stack */}
      <Footer />
    </div>
  );
}

export default App;
