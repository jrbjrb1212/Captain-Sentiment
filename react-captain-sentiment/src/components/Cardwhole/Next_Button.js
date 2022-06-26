const Next_Button = ({ movie, buttonName, onNext }) => {
    return (
        <>
            <button className="button-52" role="button" onClick={() => onNext(movie.id)}>{buttonName}</button>
        </>
    )

    
}

export default Next_Button