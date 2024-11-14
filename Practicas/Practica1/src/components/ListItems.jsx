/**
 * External libs
 */
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

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
 * @returns {JSX.Element}
 * @constructor
 */
function ListItems({query, detailsNavigatePage, namePath, thumbnailPath, thumbnailExtensionPath}) {

    const [data, setData] = useState(null);
    const [dataItemsLoaded, setDataItemsLoaded] = useState(0);

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

    useEffect(() => {
        addData();
    }, []);

    const navigate = useNavigate();

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
                                    onClick={() => {
                                        navigate(detailsNavigatePage, {state: itemData});
                                    }}
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
        </div>

    );

}

export default ListItems;