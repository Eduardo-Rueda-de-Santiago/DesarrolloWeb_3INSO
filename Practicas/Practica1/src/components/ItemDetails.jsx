/**
 * Internal libs
 */
import {useEffect, useRef, useState} from "react";

/**
 * Styles
 */
import '../styles/ItemDetails.css'

/**
 * Componente para mostrar los detalles de un item de la API
 * @param itemData Datos del item a mostrar
 * @param detailsQuery Query del item para pedir los detalles
 * @param onClose Cómo indicar que el diálogo se cierra.
 * @param favouriteCategory La categoría en la que se guardan los favoritos.
 * @returns {JSX.Element}
 * @constructor
 */
function ItemDetails({itemData, detailsQuery, favouriteCategory, onClose}) {

    // Cosas de estados
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [itemCharacters, setItemCharacters] = useState({});
    const [itemCharactersUpdated, setItemsCharactersUpdated] = useState(false);
    const [favouriteButton, setFavouriteButton] = useState(<></>);

    // Ref al dialog
    const dialogRef = useRef(null);

    // Es favorito?
    const isFavourite = () => {

        let isFavourite = false;

        const localStorageFavouritesData = localStorage[favouriteCategory];

        let favouritesData;

        if (localStorageFavouritesData) {

            favouritesData = new Map(JSON.parse(localStorageFavouritesData));

            if (favouritesData.has(itemData.id)) {

                isFavourite = true;

            }

        }

        return isFavourite;

    }

    // Añadir a favorito
    const addFavourite = () => {

        const localStorageFavouritesData = localStorage[favouriteCategory];

        let favouriteComics;

        if (localStorageFavouritesData) {

            favouriteComics = new Map(JSON.parse(localStorageFavouritesData));

        } else {

            favouriteComics = new Map();

        }

        favouriteComics.set(itemData.id, itemData);

        localStorage[favouriteCategory] = JSON.stringify(Array.from(favouriteComics.entries()));

        updateFavouriteButton();

    }

    // Quitar favorito
    const removeFavourite = () => {

        const localStorageFavouritesData = localStorage[favouriteCategory];

        let favouriteComics;

        if (localStorageFavouritesData) {

            favouriteComics = new Map(JSON.parse(localStorageFavouritesData));

            favouriteComics.delete(itemData.id);

            localStorage[favouriteCategory] = JSON.stringify(Array.from(favouriteComics.entries()));

        }

        updateFavouriteButton();

    }

    // Actualizar el botón de favoritos
    const updateFavouriteButton = () => {

        if (isFavourite()) {

            setFavouriteButton(<button onClick={removeFavourite}>Quitar favorito</button>);

        } else {

            setFavouriteButton(
                <button onClick={addFavourite} className={"comic-details-add-favourite"}>Add
                    favourite</button>
            );

        }

    }

    // Muestra el modal en cuanto se pasa un item
    useEffect(() => {

        if (itemData) {
            setIsDialogOpen(true);
            dialogRef.current?.showModal();
        }

        // Pedir los personajes al tener el item que se quiere detallar
        detailsQuery(itemData.id).then(
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
            <div className={"comic-detailed-card"}>
                <label className={"comic-details-title"}>{itemData.title}</label>
                <div className={"comic-details-extended"}>
                    <img className={"comic-details-image"}
                         src={itemData.thumbnail.path + "." + itemData.thumbnail.extension}
                         alt={"Image not found"}
                    />
                    <div className={"comic-details-description"}>
                        <div className={"comic-details-summary"}>
                            <h2>Summary</h2>
                            <br/>
                            {itemData.description}
                        </div>

                        {favouriteButton}

                    </div>
                    <div className={"comic-details-characters"}>
                        {itemCharactersUpdated ? itemCharacters.map((characterData, index) => {
                            return (
                                <div key={index} className={"comic-details-character"}>
                                    <img className={"comic-details-character-image"}
                                         src={`${characterData.thumbnail.path}.${characterData.thumbnail.extension}`}/>
                                    <label>{characterData.name}</label>
                                </div>
                            );
                        }) : "Getting characters data"}
                    </div>
                </div>
            </div>
            <button onClick={closeDialog}>Close</button>
        </dialog>
    );
}

export default ItemDetails;