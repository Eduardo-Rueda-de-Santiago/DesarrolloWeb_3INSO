import Navbar from "../components/Navbar";
import '../styles/Favourites.css';
import {getNestedValue} from "../utils/ObjectProcessingUtils";
import {useState} from "react";
import FavouriteService from '../services/FavouritesService'
import ComicDetails from "../components/ComicDetails";
import CharacterDetails from "../components/CharacterDetails";
import SeriesDetails from "../components/SeriesDetails";

function FavouritesCategory({
                                name,
                                data,
                                namePath,
                                setSelectedItemData,
                                DetailsComponent,
                                closeDialog,
                                thumbnailPath,
                                thumbnailExtensionPath
                            }) {

    console.log("data", data);
    return (


        <div className={"favourites-category"}>
            <h3 className={"favourites-category-title"}>{name}</h3>
            <div className={"favourites-category-item"}>
                {
                    data ?
                        data.map((itemData, index) => {
                            return (
                                <div
                                    className={"favourites-item-display"}
                                    key={index}
                                    onClick={() => setSelectedItemData(
                                        <DetailsComponent
                                            itemData={itemData}
                                            onClose={closeDialog}
                                        />
                                    )}

                                >
                                    <img className={"favourites-item-display-image"}
                                         src={`${getNestedValue(itemData, thumbnailPath)}.${getNestedValue(itemData, thumbnailExtensionPath)}`}
                                         alt={"Image not found"}
                                    />
                                    <p className={"favourites-item-display-name"}>{getNestedValue(itemData, namePath)}</p>
                                </div>
                            );
                        })
                        : "No content found"
                }

            </div>
        </div>
    );

}


function Favourites() {

    const [selectedItemData, setSelectedItemData] = useState(null); // To track selected item

    const closeDialog = () => {
        setSelectedItemData(null);
    }

    let data = null;
    return (
        <>
            <Navbar/>

            <div className={"favourites-dashboard"}>
                <FavouritesCategory
                    name={"Comics"}
                    data={FavouriteService.getCategoryData("comics")}
                    namePath={"title"}
                    setSelectedItemData={setSelectedItemData}
                    DetailsComponent={ComicDetails}
                    closeDialog={closeDialog}
                    thumbnailPath={'thumbnail.path'}
                    thumbnailExtensionPath={'thumbnail.extension'}
                />
                <FavouritesCategory
                    name={"Personajes"}
                    data={FavouriteService.getCategoryData("characters")}
                    namePath={"name"}
                    setSelectedItemData={setSelectedItemData}
                    DetailsComponent={CharacterDetails}
                    closeDialog={closeDialog}
                    thumbnailPath={'thumbnail.path'}
                    thumbnailExtensionPath={'thumbnail.extension'}
                />
                <FavouritesCategory
                    name={"Series"}
                    data={FavouriteService.getCategoryData("series")}
                    namePath={"title"}
                    setSelectedItemData={setSelectedItemData}
                    DetailsComponent={SeriesDetails}
                    closeDialog={closeDialog}
                    thumbnailPath={'thumbnail.path'}
                    thumbnailExtensionPath={'thumbnail.extension'}
                />
            </div>

            {selectedItemData}
        </>

    );
}

export default Favourites;