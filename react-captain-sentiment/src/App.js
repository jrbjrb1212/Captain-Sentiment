// start with header work down from there
import Header from "./components/Header"
import Cardstack from "./components/Cardstack"
import Footer from "./components/Footer"


function App() {
  //test data
    const movies = [
      {
        id: 1,
        movieName: "Ant-Man 2015",
        polarity: "polarityLabels",
        subjectivty: "subjectivtyLabels",
        moviePoster: "https://flxt.tmsimg.com/assets/p10951814_p_v8_af.jpg",
      }
    ]

  return (

    <div className="App">
      <Header movies={movies} />  {/*  Header for webstie*/}
      <Cardstack movies={movies} /> { /* big card stack */}
    </div>
  );
}

export default App;
