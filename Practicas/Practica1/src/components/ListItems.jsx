import {useEffect, useState} from "react";
import MarvelService from "../services/Marvel";
import {useNavigate} from "react-router-dom";

/**
 * Lista de items que se muestran en una página.
 * @returns {JSX.Element}
 * @constructor
 */
function ListItems({query, detailsNavigatePage, namePath, thumbnailPath, thumbnailExtensionPath}) {

    const [comicsData, setComicsData] = useState(null);
    const [comicsLoaded, setComicsLoaded] = useState(false);

    const thing = {
        thing1: {
            thing2: {
                message: "Hello world"
            }
        }
    };


    console.log(getNestedValue(thing, "thing1.thing2.message")); // Output: Hello world

    // const addComics = () => {
    //
    //     new MarvelService().getRecentComics(comicsLoaded).then(data => {
    //         console.log(data);
    //         let comicsDataCopy = comicsData;
    //         if (comicsDataCopy === null)
    //             comicsDataCopy = [];
    //         comicsDataCopy.push(data);
    //         setComicsData(comicsDataCopy);
    //         setComicsLoaded(comicsLoaded + 100);
    //         console.log("comics loaded", comicsLoaded);
    //     });

    // }

    // useEffect(() => {
    //     setComicsLoaded(comicsLoaded + 100);
    // }, [comicsData]);

    useEffect(() => {
        // addComics();
        new MarvelService().getRecentComics(0).then(data => {
            setComicsData(data);
            setComicsLoaded(true);
        });
    }, []);

    const navigate = useNavigate();

    return (
        <div className={"recent-comics"}>
            {comicsLoaded ? comicsData.map((comicData, index) => {
                return (
                    <div
                        className={"comic-display"}
                        key={index}
                        onClick={() => {
                            navigate('/ComicDetails', {state: comicData});
                        }}
                    >
                        <img className={"comic-display-image"}
                             src={comicData.thumbnail.path + "." + comicData.thumbnail.extension}
                             alt={"Image not found"}
                        />
                        <p className={"comic-display-name"}>{comicData.title}</p>
                    </div>
                );
            }) : " Comics recent data is being fetched!"}
        </div>

    );

}

export default ListItems;