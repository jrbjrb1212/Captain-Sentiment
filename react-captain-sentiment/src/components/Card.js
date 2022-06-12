import Chart from "./Chart"
import Movie from "./Movie"

export const Card = ( { movies }) => {
    const movieTitle = movies.map( function (movie) {
        return movie.movieName;
    });

    console.log(movieTitle)
    return (
        <div>
            {/* I am going to have to create an overlay of items */}
            {/* Lets start with just trying to get everything to display then I can prettify it */}

            {/* Print the title */}
            <h3 className="movie-name" >{movieTitle}</h3>
            
            {/* Resize the image */}
            
        </div>
    )
}

export default Card