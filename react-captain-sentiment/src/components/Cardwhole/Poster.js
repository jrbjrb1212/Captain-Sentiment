import AntMan from "./images/AntMan2015.jpg"
import AntMan_And_The_Wasp_2018 from "./images/AntManAndTheWasp2018.jpeg"
import BlackPanther from "./images/BlackPanther2018.jpeg"


const Poster = ({ movieLink, movieName }) => {
    console.log(movieName)
    const stringSplit = movieName.split(" ");
    var arrayLength = stringSplit.length;
    let stringBuild = ""
    for (var i = 0; i < arrayLength; i++) {
        stringBuild += stringSplit[i]
    }

    const contacts = new Map()
    contacts.set('BlackPanther', BlackPanther)

    return (
        <div>
            <img src={contacts.get(stringBuild)} alt={movieName}  className="movie-poster"/>
        </div>
    )
}

export default Poster