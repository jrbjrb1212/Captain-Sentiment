import React from 'react';

// start with header work down from there
import Header from "./components/Header"
import Cardstack from "./components/Cardstack"
import Footer from "./components/Footer"
const data = require("./components/Data.js");
console.log(data.movieData)


function App() {
    
  return (
    <div className="App">
      <Header />  {/*  Header for webstie*/}
      {/* <Cardstack movies={movies} /> { /* big card stack */}
      <Footer />
    </div>
  );
}

export default App;
