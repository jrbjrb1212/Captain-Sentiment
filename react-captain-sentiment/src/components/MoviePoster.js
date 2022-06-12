const MoviePoster = ({ imageLink, movieTitle }) => {
    return (
        <div>
            <img className="movie-poster" src={imageLink} alt={movieTitle} />
        </div>
    )
}

export default MoviePoster
