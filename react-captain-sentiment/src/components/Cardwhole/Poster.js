import AntMan_And_The_Wasp_2018 from "./images/AntMan_And_The_Wasp_2018.jpeg"


const Poster = () => {
    console.log(AntMan_And_The_Wasp_2018)
    return (
        <div>
            <img src={AntMan_And_The_Wasp_2018} alt="DAMN"  className="movie-poster"/>
        </div>
    )
}

export default Poster