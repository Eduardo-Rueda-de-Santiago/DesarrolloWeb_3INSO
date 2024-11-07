import {useEffect, useState} from "react";
import MarvelService from "../services/Marvel";
import '../styles/RecentComics.css'

/**
 * Componente home, lo primero que se muestra al usuario al iniciar la página
 * @returns {JSX.Element}
 * @constructor
 */
function RecentComics() {

    const [comicsData, setComicsData] = useState({});
    const [comicsDataUpdated, setComicsDataUpdated] = useState(false);

    useEffect(() => {

        MarvelService.getRecentComics().then(data => {
            console.log(data);
            setComicsData(data);
            setComicsDataUpdated(true);
        });

    }, []);

    return (
        <div className={"recent-comics"}>
            {comicsDataUpdated ? comicsData.map((comicData, index) => {
                return (
                    <div className={"comic-display"} key={index}>
                        <img className={"comic-display-image"}
                             src={comicData.thumbnail.path + "." + comicData.thumbnail.extension}
                             alt={"Image not found"}/>
                        <p className={"comic-display-name"}>{comicData.title}</p>
                    </div>
                );
            }) : " Comics recent data is being fetched!"}
        </div>

    );
}

export default RecentComics;