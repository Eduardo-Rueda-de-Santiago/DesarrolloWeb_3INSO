import {useEffect, useState} from "react";
import MarvelService from "../services/Marvel";

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
        <div className={"RecentComics"}>
            {comicsDataUpdated ? comicsData.map((comicData) => {
                return <p>{comicData.title}</p>;
            }) : " Comics recent data is being fetched!"}
        </div>

    );
}

export default RecentComics;