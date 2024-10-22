import {useState} from "react";

import '../styles/Home.css';
import DataFetcher from "./DataFetcher";
import PetProfile from "./PetProfile";
import Filter from "./Filter";

function Home({screenSetter}) {

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
        <div className="Home">
            <Filter filterSetter={filterSetter} petData={petDataList}/>
            <div className={"PetDisplay-Home"}>
                {
                    petDataList
                        .filter((petData) =>
                            Object.keys(filterParams).every(key => petData[key] === filterParams[key])
                        )
                        .map((petData, index) => {
                            return <PetProfile key={index} petData={petData} screenSetter={screenSetter}/>;
                        })
                }
            </div>
        </div>
    );

}

export default Home;
