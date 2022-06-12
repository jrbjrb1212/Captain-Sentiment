const MoviePoster = ({ imageLink, movieTitle }) => {
    console.log(imageLink)
    return (
        <div>
            <img className="movie-poster" src={imageLink} alt={movieTitle} />
        </div>
    )
}

export default MoviePoster
