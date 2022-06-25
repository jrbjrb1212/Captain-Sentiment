import Button from "./Button"
import Poster from "./Poster"
import Poster_Title from "./Poster_Title"
import Chart_Test from "./Chart_Test"
import { Chart as ChartJS } from "chart.js/auto";

const Card = ({ movie }) => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });

    return (
        <>
            {/* Left side of Card */}
            <section className="card-left-outline ">
                <section className="movie-title">
                    <Poster_Title movieName={movie.movieName}/>
                </section>
                <section className="movie-poster-outline">
                    <Poster movieLink={movie.moviePoster} movieName={movie.movieName}/>
                </section>
            </section>

            {/* Right side of Card */}
            <section className="card-right-outline">
                <section className="chart_outline">
                    <div className="chart">
                        <Chart_Test />
                    </div>
                    
                </section>
                <section>
                    <section className="button">
                        <Button buttonName="Next"/>
                    </section>
                    <section className="button">
                        <Button buttonName="Subjectivity"/>
                    </section>
                    <section className="button">
                        <Button buttonName="Polarity"/>
                    </section>
                    
                </section>
        
            </section>
        </>
    )
}

export default Card
