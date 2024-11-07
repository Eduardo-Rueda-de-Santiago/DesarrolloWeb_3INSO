import {useLocation} from 'react-router-dom';
import '../styles/ComicDetails.css';

function ComicDetails() {

    const comicDetails = useLocation().state || {};

    console.log("Exact data", comicDetails);

    return (
        <div className={"comic-detailed-card"}>
            <label className={"comic-details-title"}>{comicDetails.title}</label>
            <div className={"comic-details-extended"}>
                <img className={"comic-details-image"}
                     src={comicDetails.thumbnail.path + "." + comicDetails.thumbnail.extension}
                     alt={"Image not found"}
                />
                <div>

                </div>
            </div>
        </div>
    );
}

export default ComicDetails;