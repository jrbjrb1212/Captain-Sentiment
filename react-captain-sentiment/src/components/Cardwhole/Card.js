import Button from "./Button"
import Poster from "./Poster"
import Poster_Title from "./Poster_Title"
import Chart_Test from "./Chart_Test"
import { Chart as ChartJS } from "chart.js/auto";
import Next_Button from "./Next_Button";
import Subjectivity_Button from "./Subjectivity_Button";
import Polarity_Button from "./Polarity_Button";

const Card = ({ movies, onSubToggle, onPolToggle }) => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });

    return (
        <>
            {/* Left side of Card */}
            <section className="card-left-outline ">
                <section className="movie-title">
                    <Poster_Title movieName={movies[0].movieName}/>
                </section>
                <section className="movie-poster-outline">
                    <Poster movieName={movies[0].movieName}/>
                </section>
            </section>

            {/* Right side of Card */}
            <section className="card-right-outline">
                <section className="chart_outline">
                    <div className="chart">
                        <Chart_Test movie={movies[0]}/>
                    </div>
                    
                </section>
                <section>
                    <section className="button">
                        <Next_Button buttonName="Next" />
                    </section>
                    <section className="button">
                        <Subjectivity_Button movie={movies[0]} buttonName="Subjectivity" onSubToggle={onSubToggle}/>
                    </section>
                    <section className="button">
                        <Polarity_Button movie={movies[0]} buttonName="Polarity" onPolToggle={onPolToggle} />
                    </section>
                    
                </section>
        
            </section>
        </>
    )
}

export default Card
