const Polarity_Button = ({ movie, buttonName, onPolToggle }) => {
    return (
        <>
            <button className="button-52" role="button" onClick={() => onPolToggle(movie.id)}>{buttonName}</button>
        </>
    )

    
}

export default Polarity_Button