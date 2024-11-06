import {useEffect, useState} from "react";

/**
 * Componente home, lo primero que se muestra al usuario al iniciar la página
 * @returns {JSX.Element}
 * @constructor
 */
function Home() {

    const [comicData, setComicData] = useState({});

    useEffect(() => {

        fetch("https://gateway.marvel.com:443/v1/public/comics", {
            method: "GET",
            headers: {
                apiKey: process.env.REACT_APP_MARVEL_PUBLIC_API_KEY,
                orderBy: "modified",
                limit: 100
            }
        })
            .then(async (response) => {
                return await response.json();
            })
            .then((data) => {
                console.log(data);
                setComicData(data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, []);


    return (
        <div>
            <p>Processing</p>
            {/*{comicData.map((item, index) => (*/}
            {/*        <div key={index}>{item}</div>*/}
            {/*    )*/}
            {/*)}*/}
        </div>

    );
}

export default Home;