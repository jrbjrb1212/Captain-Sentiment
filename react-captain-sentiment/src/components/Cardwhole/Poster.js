import AntMan from "./images/AntMan2015.jpg"
import AntManAndTheWasp from "./images/AntManAndTheWasp2018.jpeg"
import BlackPanther from "./images/BlackPanther2018.jpeg"
import AvengersAgeofUltron from "./images/AvengersAgeofUltron2015.jpeg"
import AvengersEndgame from "./images/AvengersEndgame2019.jpg"
import BlackWidow from "./images/BlackWidow2021.jpeg"
import CaptainAmerica from "./images/CaptainAmerica2011.jpg"
import CaptainAmericaCivilWar from "./images/CaptainAmericaCivilWar2016.jpeg"
import CaptainAmericaTheWinterSoilder from "./images/CaptainAmericaTheWinterSoilder2014.jpg"
import CaptainMarvel from "./images/CaptainMarvel2019.jpeg"
import DoctorStrange from "./images/DoctorStrange2016.jpeg"
import DoctorStrangeintheMultiverseOfMadness from "./images/DoctorStrangeintheMultiverseOfMadness2022.jpeg"
import Eternals from "./images/Eternals2021.jpg"
import GuardiansoftheGalaxy from "./images/GuardiansoftheGalaxy2014.jpg"
import GuardiansoftheGalaxy2 from "./images/GuardiansoftheGalaxy22017.jpg"
import InfinityWar from "./images/InfinityWar2018.jpeg"
import IronMan from "./images/IronMan2008.jpg"
import IronMan2 from "./images/IronMan22010.jpeg"
import IronMan3 from "./images/IronMan32013.jpeg"
import Morbius from "./images/Morbius2022.jpeg"
import ShangChi from "./images/ShangChi2021.jpg"
import SpiderManFarFromHome from "./images/SpiderManFarFromHome2017.jpeg"
import SpiderManHomecoming from "./images/SpiderManHomecoming2017.jpg"
import SpiderManNoWayHome from "./images/SpiderManNoWayHome2021.jpg"
import TheAvengers from "./images/TheAvengers2012.jpeg"
import TheIncredibleHulk from "./images/TheIncredibleHulk2008.jpeg"
import Thor from "./images/Thor2011.jpeg"
import ThorRagnarok from "./images/ThorRagnarok2017.jpeg"
import ThorTheDarkWorld from "./images/ThorTheDarkWorld.jpeg"


const Poster = ({ movieLink, movieName }) => {
    const stringSplit = movieName.split(" ");
    var arrayLength = stringSplit.length;
    let stringBuild = ""
    for (var i = 0; i < arrayLength; i++) {
        stringBuild += stringSplit[i]
    }

    const contacts = new Map()
    contacts.set('Ant-Man', AntMan)
    contacts.set('Ant-ManandtheWasp', AntManAndTheWasp)
    contacts.set('AvengersAgeofUltron', AvengersAgeofUltron)
    contacts.set('AvengersEndgame', AvengersEndgame)
    contacts.set('BlackPanther', BlackPanther)
    contacts.set('BlackWidow', BlackWidow)
    contacts.set('CaptainAmerica:TheFirstAvenger', CaptainAmerica)
    contacts.set('CaptainAmericaTheWinterSoilder', CaptainAmericaTheWinterSoilder)
    contacts.set('CaptainAmericaCivilWar', CaptainAmericaCivilWar)
    contacts.set('CaptainMarvel', CaptainMarvel)
    contacts.set('DoctorStrange', DoctorStrange)
    contacts.set('DoctorStrangeintheMultiverseofMadness', DoctorStrangeintheMultiverseOfMadness)
    contacts.set('Eternals', Eternals)
    contacts.set('GuardiansoftheGalaxy', GuardiansoftheGalaxy)
    contacts.set('GuardiansoftheGalaxyVol.2"', GuardiansoftheGalaxy2)
    contacts.set('AvengersInfinityWar', InfinityWar)
    contacts.set('IronMan', IronMan)
    contacts.set('IronMan2', IronMan2)
    contacts.set('IronMan3', IronMan3)
    contacts.set('TheIncredibleHulk', TheIncredibleHulk)
    contacts.set('Morbius', Morbius)
    contacts.set('Shang-ChiandtheLegendoftheTenRings', ShangChi)
    contacts.set('Spider-ManFarfromHome', SpiderManFarFromHome)
    contacts.set('Spider-ManHomecoming', SpiderManHomecoming)
    contacts.set('SpiderManNoWayHome', SpiderManNoWayHome)
    contacts.set('TheAvengers', TheAvengers)
    contacts.set('Thor', Thor)
    contacts.set('ThorRagnarok', ThorRagnarok)
    contacts.set('ThorTheDarkWorld', ThorTheDarkWorld)
    

    return (
        <div>
            <img src={contacts.get(stringBuild)} alt={movieName}  className="movie-poster"/>
        </div>
    )
}

export default Poster