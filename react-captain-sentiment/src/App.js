import React from 'react';

// start with header work down from there
import Header from "./components/Header"
import Card from "./components/Cardwhole/Card"
import Footer from "./components/Footer"
const data = require("./components/Data.js");
console.log(data.movieData)


function App() {
    
  return (
    <div className="App">
      <Header />  {/*  Header for webstie*/}
      <br />
      <br />
      <br />
      {/* Cardstack here */}
      <section className="card-body">
        <Card/>
      </section>
      
      
      <br />
      <br />
      <br />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
