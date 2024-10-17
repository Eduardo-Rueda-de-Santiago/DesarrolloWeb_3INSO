import {useState} from "react";

import '../styles/App.css';
import DataFetcher from "./DataFetcher";
import PetProfile from "./PetProfile";
import Filter from "./Filter";

function App() {

    const [petDataList, setPetDataList] = useState([]);
    const [filterParams, setFilterParams] = useState({});

    const dataSetter = (data) => {
        setPetDataList(data);
    };

    const filterSetter = (param) => {

        const newFilterParams = {...filterParams, ...param};
        setFilterParams(newFilterParams);
        console.log(filterParams)
    }

    DataFetcher({dataSetter});


    return (
        <div className="App">
            <Filter filterSetter={filterSetter} petData={petDataList}/>
            <div className={"PetDisplay"}>
                {
                    petDataList
                        .filter((petData) => {
                            return (
                                (petData.tipo === filterParams.tipo || filterParams.tipo === null)
                            );
                        })
                        .map((petData) => {
                            return <PetProfile petData={petData}/>;
                        })
                }
            </div>
        </div>
    );

}

export default App;
