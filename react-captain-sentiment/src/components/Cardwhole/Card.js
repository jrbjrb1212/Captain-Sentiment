import Button from "./Button"
import Poster from "./Poster"
import Chart from "./Chart"

const Card = () => {
    // const movieTitle = movie.map( function (movie) {
    //     return movie.movieName;
    // });

    return (
        <>
            {/* Left side of Card */}
            <section >
                <Poster />
            </section>,

            {/* Right side of Card */}
            <section>
                <section>
                    <Chart />
                </section>
                <section>
                    <Button />
                </section>
        
            </section>,  
        </>
    )
}

export default Card
