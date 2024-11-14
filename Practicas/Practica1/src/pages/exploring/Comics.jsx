import Navbar from "../../components/Navbar";
import ListItems from "../../components/ListItems";
import MarvelService from "../../services/Marvel";

function Comics() {

    const query = async (offset) => {

        let queryResults = null;

        try {

            queryResults = new MarvelService().getRecentComics(offset);

        } catch (exception) {

            console.error(exception);

        }

        return queryResults;
    }

    const charactersQuery = async (comicId) => {

        let queryResults = null;

        try {

            queryResults = new MarvelService().getComicsCharacters(comicId);

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
                charactersQuery={charactersQuery}
                favouriteCategory={'comics'}
                namePath={'title'}
                thumbnailPath={'thumbnail.path'}
                thumbnailExtensionPath={'thumbnail.extension'}
            />
        </>
    );
}

export default Comics;