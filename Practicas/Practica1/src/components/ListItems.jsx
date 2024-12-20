/**
 * External libs
 */
import {useEffect, useState} from "react";

/**
 * Internal libs
 */
import {getNestedValue} from "../utils/ObjectProcessingUtils";

/**
 * Styles
 */
import '../styles/ListItems.css'

/**
 * Lista de items que se muestran en una página.
 * @param query Query con la que obtener los datos
 * @param DetailsComponent Componente con los detalles en caso de que se quieran ver.
 * @param namePath Camino al nombre de los componentes de la lista.
 * @param thumbnailPath Camino al thubmnail de los componentes de la lista.
 * @param thumbnailExtensionPath Camino a la extensión de los componentes de la lista.
 * @returns {JSX.Element}
 * @constructor
 */
function ListItems({query, DetailsComponent, namePath, thumbnailPath, thumbnailExtensionPath}) {

    const [data, setData] = useState(null);
    const [dataItemsLoaded, setDataItemsLoaded] = useState(0);
    const [selectedItemData, setSelectedItemData] = useState(null); // To track selected item

    const addData = async () => {

        const queryResult = await query(dataItemsLoaded);

        if (!data) {

            setData(queryResult);

        } else {

            const newData = [...data];
            newData.push(...queryResult);
            setData(newData);

        }

        setDataItemsLoaded(dataItemsLoaded + 100);

    }

    const closeDialog = () => {
        setSelectedItemData(null);
    }

    useEffect(() => {
        addData();
    }, []);

    return (
        <div className={"items-page"}>
            <div className={"items-list"}>

                {dataItemsLoaded > 0 ?
                    <>
                        {data.map((itemData, index) => {
                            return (
                                <div
                                    className={"items-display"}
                                    key={index}
                                    onClick={() => setSelectedItemData(itemData)} // Set selected item data

                                >
                                    <img className={"items-display-image"}
                                         src={`${getNestedValue(itemData, thumbnailPath)}.${getNestedValue(itemData, thumbnailExtensionPath)}`}
                                         alt={"Image not found"}
                                    />
                                    <p className={"items-display-name"}>{getNestedValue(itemData, namePath)}</p>
                                </div>
                            );
                        })}
                    </>
                    : " Data is being fetched!"}


            </div>
            {dataItemsLoaded > 0 ?
                <button className={"items-load-more-button"} onClick={addData}>Load more</button>
                : <></>
            }
            {selectedItemData && (
                <DetailsComponent
                    itemData={selectedItemData}
                    onClose={closeDialog}
                />
            )}
        </div>

    );

}

export default ListItems;