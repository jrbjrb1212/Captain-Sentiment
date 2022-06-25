import Button from "./Button"
import Poster from "./Poster"
import Poster_Title from "./Poster_Title"
import Chart_Test from "./Chart_Test"
import { Chart as ChartJS } from "chart.js/auto";
import Next_Button from "./Next_Button";
import Subjectivity_Button from "./Subjectivity_Button";
import Polarity_Button from "./Polarity_Button";

const Card = ({ movie }) => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });

    const toggleSubjectivity = (id) => {
        console.log(movie.id)
    }

    const togglePolarity = (id) => {
        console.log(movie.id)
    }

    const toggleNext = (id) => {
        console.log(movie.id)
    }


    return (
        <>
            {/* Left side of Card */}
            <section className="card-left-outline ">
                <section className="movie-title">
                    <Poster_Title movieName={movie.movieName}/>
                </section>
                <section className="movie-poster-outline">
                    <Poster movieName={movie.movieName}/>
                </section>
            </section>

            {/* Right side of Card */}
            <section className="card-right-outline">
                <section className="chart_outline">
                    <div className="chart">
                        <Chart_Test movie={movie}/>
                    </div>
                    
                </section>
                <section>
                    <section className="button">
                        <Next_Button buttonName="Next" onToggle={toggleNext}/>
                    </section>
                    <section className="button">
                        <Subjectivity_Button buttonName="Subjectivity" onToggle={toggleSubjectivity}/>
                    </section>
                    <section className="button">
                        <Polarity_Button buttonName="Polarity" onToggle={togglePolarity}/>
                    </section>
                    
                </section>
        
            </section>
        </>
    )
}

export default Card
