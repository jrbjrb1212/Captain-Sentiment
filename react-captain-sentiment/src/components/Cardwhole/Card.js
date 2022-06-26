import Poster from "./Poster"
import Poster_Title from "./Poster_Title"
import Chart_Test from "./Chart_Test"
import { Chart as ChartJS } from "chart.js/auto";
import Next_Button from "./Next_Button";
import Subjectivity_Button from "./Subjectivity_Button";
import Polarity_Button from "./Polarity_Button";

const Card = ({ movies, movieID, onSubToggle, onPolToggle, onNext, toggleSelect }) => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });
    console.log(movies)

    return (
        <>
            {/* Left side of Card */}
            <section className="card-left-outline ">
                <section className="movie-title">
                    <Poster_Title movie={movies[movieID]} movieName={movies[movieID].movieName} toggleSelect={toggleSelect}/>
                </section>
                <section className="movie-poster-outline">
                    <Poster movieName={movies[movieID].movieName}/>
                </section>
            </section>

            {/* Right side of Card */}
            <section className="card-right-outline">
                <section className="chart_outline">
                    <div className="chart">
                        <Chart_Test movie={movies[movieID]}/>
                    </div>
                    
                </section>
                <section>
                    <section className="button">
                        <Next_Button movie={movies[movieID]} buttonName="Next" onNext={onNext}/>
                    </section>
                    <section className="button">
                        <Subjectivity_Button movie={movies[movieID]} buttonName="Subjectivity" onSubToggle={onSubToggle}/>
                    </section>
                    <section className="button">
                        <Polarity_Button movie={movies[movieID]} buttonName="Polarity" onPolToggle={onPolToggle} />
                    </section>
                    
                </section>
        
            </section>
        </>
    )
}

export default Card
