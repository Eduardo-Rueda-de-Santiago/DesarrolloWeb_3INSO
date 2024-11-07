/**
 * Service to request data from the marvel API
 */
class MarvelService {
    constructor() {

        this.ts = 18;
        this.publicKey = process.env.REACT_APP_MARVEL_PUBLIC_API_KEY;
        this.privateKey = process.env.REACT_APP_MARVEL_PRIVATE_API_KEY;

    }

    async getRecentComics() {

        try {

            return (await fetch("https://gateway.marvel.com:443/v1/public/comics?" +
                    new URLSearchParams({

                        apikey: this.publicKey,
                        orderBy: "modified",
                        limit: 100,

                    }).toString(), {

                    method: "GET",

                })
                    .then((response) => {
                        return response.json();
                    })
            ).data.results;

        } catch (error) {

            console.log("ERROR getting recent comics: ", error);

        }
    }
}

export default new MarvelService();