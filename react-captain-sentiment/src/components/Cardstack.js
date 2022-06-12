import Card from "./Card"

export const Cardstack = ({ movies }) => {
    // extracting funtction
    const movieTitle = movies.map( function (movie) {
        return movie.movieName;
    });

    return (
        <div className='cardstack-body'>  {/* Create a big space to use */}
            {/* Call card when a new movie is needed*/}
            {/* Will probably need a random card selector function*/}
            <Card movies={movies}/> 
        </div>
    )
}

export default Cardstack