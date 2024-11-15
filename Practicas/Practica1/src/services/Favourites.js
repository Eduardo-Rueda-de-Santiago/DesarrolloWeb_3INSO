class Favourites {

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

        let favouriteComics;

        if (localStorageFavouritesData) {

            favouriteComics = new Map(JSON.parse(localStorageFavouritesData));

        } else {

            favouriteComics = new Map();

        }

        favouriteComics.set(itemData.id, itemData);

        localStorage[this.favouriteCategory] = JSON.stringify(Array.from(favouriteComics.entries()));

    }

    // Quitar favorito
    removeFavourite(itemData) {

        const localStorageFavouritesData = localStorage[this.favouriteCategory];

        let favouriteComics;

        if (localStorageFavouritesData) {

            favouriteComics = new Map(JSON.parse(localStorageFavouritesData));

            favouriteComics.delete(itemData.id);

            localStorage[this.favouriteCategory] = JSON.stringify(Array.from(favouriteComics.entries()));

        }

    }

}

export default Favourites;