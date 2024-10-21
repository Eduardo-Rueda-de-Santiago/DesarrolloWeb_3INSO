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

    const filterSetter = (filter) => {
        setFilterParams(filter);
    }

    DataFetcher({dataSetter});


    return (
        <div className="App">
            <Filter filterSetter={filterSetter} petData={petDataList}/>
            <div className={"PetDisplay"}>
                {
                    petDataList
                        .filter((petData) =>
                            Object.keys(filterParams).every(key => petData[key] === filterParams[key])
                        )
                        .map((petData, index) => {
                            return <PetProfile key={index} petData={petData}/>;
                        })
                }
            </div>
        </div>
    );

}

export default App;
