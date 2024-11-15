class FavouritesService {

    constructor(favouriteCategory) {
        this.favouriteCategory = favouriteCategory;
    }

    // Es favorito?
    isFavourite(itemData) {

        let isFavourite = false;

        const localStorageFavouritesData = localStorage[this.favouriteCategory];

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
    addFavourite(itemData) {

        const localStorageFavouritesData = localStorage[this.favouriteCategory];

        let favouritesData;

        if (localStorageFavouritesData) {

            favouritesData = new Map(JSON.parse(localStorageFavouritesData));

        } else {

            favouritesData = new Map();

        }

        favouritesData.set(itemData.id, itemData);

        localStorage[this.favouriteCategory] = JSON.stringify(Array.from(favouritesData.entries()));

    }

    // Quitar favorito
    removeFavourite(itemData) {

        const localStorageFavouritesData = localStorage[this.favouriteCategory];

        let favouritesData;

        if (localStorageFavouritesData) {

            favouritesData = new Map(JSON.parse(localStorageFavouritesData));

            favouritesData.delete(itemData.id);

            localStorage[this.favouriteCategory] = JSON.stringify(Array.from(favouritesData.entries()));

        }

    }

    // Obtener datos de categoría propia
    getData() {
        const localStorageFavouritesData = localStorage[this.favouriteCategory];

        let favouritesData;

        if (localStorageFavouritesData) {

            favouritesData = new Map(JSON.parse(localStorageFavouritesData));

        } else {

            favouritesData = new Map();

        }

        return Array.from(favouritesData.values());
    }

    // Obtener los datos de una categoría
    static getCategoryData(category) {
        return new FavouritesService(category).getData();
    }

}

export default FavouritesService;