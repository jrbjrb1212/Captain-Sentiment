import Header from "./components/Header"
// start with header work down from there

function App() {
  //test data
    const movies = [
      {
        id: 1,
        movieName: "Ant-Man 2015",
        polarity: "polarityLabels",
        subjectivty: "subjectivtyLabels",
        // moviePoster: "https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
      }
    ]

  return (

    <div className="App">
      <Header movies={movies} />  {/*  Header for webstie*/}
      
    </div>
  );
}

export default App;
