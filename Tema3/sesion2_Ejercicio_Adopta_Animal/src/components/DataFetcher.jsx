import {useEffect} from "react";

function DataFetcher({dataSetter}) {

    useEffect(() => {

        fetch("https://huachitos.cl/api/animales")
            .then(
                (response) => {
                    return response.json();
                }
            )
            .then((jsonResponse) => {
                dataSetter(jsonResponse.data);
            })

    }, []);

    return null;
}

export default DataFetcher;