import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/RecentComics.css'
import {getNestedValue} from "../utils/ObjectProcessingUtils";

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
        <div className={"recent-comics"}>

            {dataItemsLoaded > 0 ?
                <>
                    {data.map((itemData, index) => {
                        return (
                            <div
                                className={"comic-display"}
                                key={index}
                                onClick={() => {
                                    navigate(detailsNavigatePage, {state: itemData});
                                }}
                            >
                                <img className={"comic-display-image"}
                                     src={`${getNestedValue(itemData, thumbnailPath)}.${getNestedValue(itemData, thumbnailExtensionPath)}`}
                                     alt={"Image not found"}
                                />
                                <p className={"comic-display-name"}>{getNestedValue(itemData, namePath)}</p>
                            </div>
                        );
                    })}
                    <button onClick={addData}>Load more</button>
                </>
                : " Data is being fetched!"}
        </div>

    );

}

export default ListItems;