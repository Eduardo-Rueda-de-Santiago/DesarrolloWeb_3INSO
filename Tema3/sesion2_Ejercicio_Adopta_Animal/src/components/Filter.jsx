import {useEffect, useState} from "react";
import '../styles/Filter.css';

function Filter({filterSetter, petData}) {

    const [edad, setEdad] = useState(null);
    const [ageList, setAgeList] = useState([]);

    const [tipo, setTipo] = useState(null);
    const [petTypeList, setPetTypeList] = useState([]);

    const [genero, setGenero] = useState(null);
    const [petGeneroList, setPetGeneroList] = useState([]);

    const [estado, setEstado] = useState(null);
    const [petEstadoList, setPetEstadoList] = useState([]);

    useEffect(() => {

        //Llenar lista de edades
        const tempAgeList = [];
        petData.forEach((pet) => {
            if (!tempAgeList.includes(pet.edad)) {
                tempAgeList.push(pet.edad);
            }
        });
        setAgeList(tempAgeList);

        //Llenar lista de tipos
        const tempTypeList = [];
        petData.forEach((pet) => {
            if (!tempTypeList.includes(pet.tipo)) {
                tempTypeList.push(pet.tipo);
            }
        });
        setPetTypeList(tempTypeList);

        //Llenar lista de géneros
        const tempGenreList = [];
        petData.forEach((pet) => {
            if (!tempGenreList.includes(pet.genero)) {
                tempGenreList.push(pet.genero);
            }
        });
        setPetGeneroList(tempGenreList);

        //Llenar lista de estados
        const tempEstadoList = [];
        petData.forEach((pet) => {
            if (!tempEstadoList.includes(pet.estado)) {
                tempEstadoList.push(pet.estado);
            }
        });
        setPetEstadoList(tempEstadoList);

    }, [petData]);

    const applyFilter = () => {
        const filter = {};
        if (tipo !== null) filter.tipo = tipo;
        if (edad !== null) filter.edad = edad;
        if (genero !== null) filter.genero = genero;
        if (estado !== null) filter.estado = estado;
        filterSetter(filter);
    }

    //Añade trigger cuando cambien los filtros
    useEffect(() => {
        applyFilter();
    }, [tipo, edad, genero, estado]);


    const changePetType = (e) => {
        setTipo(e.target.value || null);
    }

    const changePetAge = (e) => {
        setEdad(e.target.value || null);
    }

    const changePetGenre = (e) => {
        setGenero(e.target.value || null);
    }

    const changePetEstado = (e) => {
        setEstado(e.target.value || null);
    }


    const clearFilter = () => {
        setTipo(null);
        setEdad(null);
        setGenero(null);
        setEstado(null);
        //TODO: make this react coherent
        document.querySelectorAll('.Filtro').forEach(select => select.selectedIndex = 0);
    }


    return (
        <div className={"Buscador"}>

            <select className={"Filtro"} onChange={changePetType}>
                <option className={"Opcion"} value={''}>Tipo</option>
                {
                    petTypeList.map((type, index) => {
                        return <option className={"Opcion"} key={index} value={type}>{type}</option>
                    })
                }
            </select>


            <select className={"Filtro"} onChange={changePetAge}>
                <option className={"Opcion"} value={''}>Edad</option>
                {
                    ageList.map((age, index) => {
                        return <option className={"Opcion"} key={index} value={age}>{age}</option>
                    })
                }
            </select>

            <select className={"Filtro"} onChange={changePetGenre}>
                <option className={"Opcion"} value={''}>Género</option>
                {
                    petGeneroList.map((age, index) => {
                        return <option className={"Opcion"} key={index} value={age}>{age}</option>
                    })
                }
            </select>

            <select className={"Filtro"} onChange={changePetEstado}>
                <option className={"Opcion"} value={''}>Estado</option>
                {
                    petEstadoList.map((age, index) => {
                        return <option className={"Opcion"} key={index} value={age}>{age}</option>
                    })
                }
            </select>

            <button className={"ClearFilter"} onClick={clearFilter}>Clear filter</button>

        </div>
    )
}

export default Filter;