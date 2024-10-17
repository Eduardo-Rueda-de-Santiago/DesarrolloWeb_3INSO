import {useEffect, useState} from "react";

function Filter({filterSetter, petData}) {

    const [edad, setEdad] = useState(null);
    const [ageList, setAgeList] = useState([]);

    const [tipo, setTipo] = useState(null);
    const [petTypeList, setPetTypeList] = useState([]);


    useEffect(() => {
        const tempAgeList = [];
        petData.forEach((pet) => {
            if (!tempAgeList.includes(pet.edad)) {
                tempAgeList.push(pet.edad);
            }
        });
        setAgeList(tempAgeList);
    }, [petData]);


    useEffect(() => {
        const tempTypeList = [];
        petData.forEach((pet) => {
            if (!tempTypeList.includes(pet.tipo)) {
                tempTypeList.push(pet.tipo);
            }
        });
        setPetTypeList(tempTypeList);

    }, [petData]);


    const changePetType = (e) => {
        setTipo(e.target.value);
        applyFilter();
    }

    const changePetAge = (e) => {
        setEdad(e.target.value);
        applyFilter();
    }


    const applyFilter = () => {
        filterSetter({tipo, edad});
    }


    return (
        <div>
            <p>Buscador</p>

            <select onChange={changePetType}>
                <option value={null}>No filtrar</option>
                {
                    petTypeList.map((type) => {
                        return <option value={type}>{type}</option>
                    })
                }
            </select>

            <select onChange={changePetAge}>
                <option value={null}>No filtrar</option>
                {
                    ageList.map((age) => {
                        return <option value={age}>{age}</option>
                    })
                }
            </select>

            <button onClick={applyFilter}>Filtrar</button>

        </div>
    )
}

export default Filter;