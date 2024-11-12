import {useLocation} from 'react-router-dom';
import '../../styles/ComicDetails.css';
import MarvelService from "../../services/Marvel";
import {useEffect, useState} from "react";
import Navbar from "../../components/Navbar";

function ComicDetails() {

    const [comicDetails,] = useState(useLocation().state || {});
    const [comicCharacters, setComicCharacters] = useState({});
    const [comicCharactersUpdated, setComicCharactersUpdated] = useState(false);


    useEffect(() => {

        new MarvelService().getComicsCharacters(comicDetails.id).then(
            data => {
                setComicCharacters(data);
                setComicCharactersUpdated(true);
            });

    }, []);

    const addFavourite = () => {
        const localStorageFavouriteComics = localStorage.favouriteComics;
        let favouriteComics;
        if (localStorageFavouriteComics) {
            favouriteComics = new Map(JSON.parse(localStorageFavouriteComics));
        } else {
            favouriteComics = new Map();
        }
        favouriteComics.set(comicDetails.id, comicDetails);
        console.log(favouriteComics)
        localStorage.favouriteComics = JSON.stringify(Array.from(favouriteComics.entries()));
    }

    return (
        <div>
            <Navbar/>
            <div className={"comic-detailed-card"}>
                <label className={"comic-details-title"}>{comicDetails.title}</label>
                <div className={"comic-details-extended"}>
                    <img className={"comic-details-image"}
                         src={comicDetails.thumbnail.path + "." + comicDetails.thumbnail.extension}
                         alt={"Image not found"}
                    />
                    <div className={"comic-details-description"}>
                        <div className={"comic-details-summary"}>
                            <h2>Summary</h2>
                            <br/>
                            {comicDetails.description}
                        </div>
                        <button onClick={addFavourite} className={"comic-details-add-favourite"}>Add favourite</button>
                    </div>
                    <div className={"comic-details-characters"}>
                        {comicCharactersUpdated ? comicCharacters.map((characterData, index) => {
                            return (
                                <div key={index} className={"comic-details-character"}>
                                    <img className={"comic-details-character-image"}
                                         src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}/>
                                    <label>{characterData.name}</label>
                                </div>
                            );
                        }) : "Getting characters data"}
                    </div>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

export default ComicDetails;