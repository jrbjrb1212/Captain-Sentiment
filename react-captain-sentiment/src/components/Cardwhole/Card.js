import Button from "./Button"
import Poster from "./Poster"
import Poster_Title from "./Poster_Title"
import Chart from "./Chart"

const Card = () => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });

    return (
        <>
            {/* Left side of Card */}
            <section className="card-left-outline ">
                <section className="movie-title">
                    <Poster_Title />
                </section>
                <section className="movie-poster">
                    <Poster />
                </section>
            </section>

            {/* Right side of Card */}
            <section className="card-right-outline">
                <section className="chart">
                    <Chart />
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
