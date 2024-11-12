import MarvelService from "../../services/Marvel";
import Navbar from "../../components/Navbar";
import ListItems from "../../components/ListItems";

function Series() {

    const query = async (offset) => {

        let queryResults = null;

        try {

            queryResults = new MarvelService().getRecentSeries(offset);

        } catch (exception) {

            console.error(exception);

        }

        return queryResults;
    }

    return (
        <>
            <Navbar/>
            <ListItems
                query={query}
                detailsNavigatePage={'/ComicDetails'}
                namePath={'title'}
                thumbnailPath={'thumbnail.path'}
                thumbnailExtensionPath={'thumbnail.extension'}
            />
        </>
    );
}

export default Series;