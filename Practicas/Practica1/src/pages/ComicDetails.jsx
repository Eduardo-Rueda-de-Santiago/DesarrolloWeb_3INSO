import {useLocation} from 'react-router-dom';

function ComicDetails() {

    const location = useLocation();
    console.log(location);
    const {comicDetails} = location.state || {};

    console.log(comicDetails);

    return (
        <div>
            <p>Comic dert</p>
            <p>{comicDetails}</p>
        </div>
    );
}

export default ComicDetails;