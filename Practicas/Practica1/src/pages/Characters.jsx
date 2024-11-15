import MarvelService from "../services/Marvel";
import Navbar from "../components/Navbar";
import ListItems from "../components/ListItems";
import CharacterDetails from "../components/CharacterDetails";

function Characters() {

    const query = async (offset) => {

        let queryResults = null;

        try {

            queryResults = new MarvelService().getRecentCharacters(offset);

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
                DetailsComponent={CharacterDetails}
                namePath={'name'}
                thumbnailPath={'thumbnail.path'}
                thumbnailExtensionPath={'thumbnail.extension'}
            />
        </>
    );

}

export default Characters;