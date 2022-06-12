import Card from "./Card"

export const Cardstack = ({ movies }) => {
    console.log(movies)
    // extracting funtction
    const movieTitle = movies.map( function (movie) {
        return movie.movieName;
    });
    console.log(movies)
    return (
        <div className='cardstack-body'>  {/* Create a big space to use */}
            {/* Call card when a new movie is needed*/}
            {/* Will probably need a random card selector function*/}
            <Card movies={movies}/> 
        </div>
    )
}

export default Cardstack