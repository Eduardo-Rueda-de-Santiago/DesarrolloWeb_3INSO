/**
 * Internal libs
 */
import {useEffect, useRef, useState} from "react";
import FavouritesService from "../services/FavouritesService";

/**
 * Styles
 */
import '../styles/ItemDetails.css'
import MarvelService from "../services/Marvel";
import CharacterDetails from "./CharacterDetails";

/**
 * Componente para mostrar los detalles los comics
 * @param itemData Datos del item a mostrar
 * @param onClose Cómo indicar que el diálogo se cierra.
 * @returns {JSX.Element}
 * @constructor
 */
function ComicDetails({itemData, onClose}) {

    // Cosas de estados
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [itemCharacters, setItemCharacters] = useState({});
    const [itemCharactersUpdated, setItemsCharactersUpdated] = useState(false);
    const [favouriteButton, setFavouriteButton] = useState(<></>);
    const [selectedItemData, setSelectedItemData] = useState(null); // To track selected item

    const closeCharacterDialog = () => {
        setSelectedItemData(null);
    }

    const favouritesService = new FavouritesService('comics');

    // Ref al dialog
    const dialogRef = useRef(null);

    // Actualizar el botón de favoritos
    const updateFavouriteButton = () => {

        if (favouritesService.isFavourite(itemData)) {

            setFavouriteButton(
                <button
                    onClick={() => {
                        favouritesService.removeFavourite(itemData);
                        updateFavouriteButton();
                    }}
                    className={"item-details-favourite"}>
                    Quitar favorito</button>
            );

        } else {

            setFavouriteButton(
                <button
                    onClick={() => {
                        favouritesService.addFavourite(itemData);
                        updateFavouriteButton();
                    }}
                    className={"item-details-favourite"}>
                    Add favourite</button>
            );

        }

    }

    // Query para coger los personajes del comic
    const comicCharactersQuery = async (comicId) => {

        let queryResults = null;

        try {

            queryResults = new MarvelService().getComicsCharacters(comicId);

        } catch (exception) {

            console.error(exception);

        }

        return queryResults;
    }

    // Muestra el modal en cuanto se pasa un item
    useEffect(() => {

        if (itemData) {
            setIsDialogOpen(true);
            dialogRef.current?.showModal();
        }

        // Pedir los personajes al tener el item que se quiere detallar
        comicCharactersQuery(itemData.id).then(
            data => {
                setItemCharacters(data);
                setItemsCharactersUpdated(true);
            });

        updateFavouriteButton();

    }, [itemData]);

    // Cierra el modal
    const closeDialog = () => {
        setIsDialogOpen(false);
        dialogRef.current?.close();
        onClose();
    };

    return (
        <dialog className={"item-dialogue"} ref={dialogRef} open={isDialogOpen}>
            <div className={"item-detailed-card"}>
                <label className={"item-details-title"}>{itemData.title}</label>
                <div className={"item-details-extended"}>
                    <img className={"item-details-image"}
                         src={itemData.thumbnail.path + "." + itemData.thumbnail.extension}
                         alt={"Image not found"}
                    />

                    <div className={"item-details-summary"}>
                        <h2 style={{textAlign: "center"}}>Summary</h2>
                        <br/>
                        {itemData.description}
                    </div>

                    <div className={"aux-item-details-div"}>

                        <div className={"item-details-listed-elements"}>
                            {itemCharactersUpdated ? itemCharacters.map((characterData, index) => {
                                return (
                                    <div key={index} className={"item-details-element"}
                                         onClick={() => setSelectedItemData(characterData)} // Set selected item data
                                    >
                                        <img className={"item-details-element-image"}
                                             src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}/>
                                        <label>{characterData.name}</label>
                                    </div>
                                );
                            }) : "Getting characters data"}
                        </div>

                        {favouriteButton}

                    </div>

                </div>

                <button className={"close-item-button"} onClick={closeDialog}>Close</button>
            </div>

            {selectedItemData && (
                <CharacterDetails
                    itemData={selectedItemData}
                    onClose={closeCharacterDialog}
                />
            )}
        </dialog>
    );
}

export default ComicDetails;