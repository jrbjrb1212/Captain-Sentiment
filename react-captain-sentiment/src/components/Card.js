import Chart from "./Chart"
import MoviePoster from "./MoviePoster"

export const Card = ( { movies }) => {
    console.log(movies)
    const movieTitle = movies.map( function (movie) {
        return movie.movieName;
    });

    const moviePoster = movies.map( function (movie) {
        return movie.moviePoster;
    });
    console.log(moviePoster)

    return (
        <div>
            {/* I am going to have to create an overlay of items */}
            {/* Lets start with just trying to get everything to display then I can prettify it */}

            {/* Print the title */}
            <h3 className="movie-name" >{movieTitle}</h3>
            
            {/* Resize the image */}

            <MoviePoster imageLink={moviePoster} movieTitle={movieTitle}/>

            
        </div>
    )
}

export default Card