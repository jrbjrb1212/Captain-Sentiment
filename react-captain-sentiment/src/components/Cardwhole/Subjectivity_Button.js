const Subjectivity_Button = ({ movie, buttonName, onSubToggle }) => {
    return (
        <div>
            <button className="button-52" onClick={() => onSubToggle(movie.id)}>{buttonName}</button>
        </div>
    )

    
}

export default Subjectivity_Button