import axios from 'axios';
import {useEffect, useState} from 'react';
import PersonDetail from './PersonDetail';

function PeopleList() {

    const [people, setPeople] = useState([]);
    const [urlSelected, setUrlSelected] = useState('');
    // useEffect(() => {
    //     axios.get('https://swapi.dev/api/people')
    //         .then(response => {
    //             setPeople(response.data.results);
    //         })
    // }, []);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
            .then(response => response.json())
            .then(response => {
                setPeople(response.data.results);
            })
    }, []);

    let listPeople = null;
    if (people.length > 0) {
        listPeople = people.map(person => (
            <div className="person">
                <h3 onClick={() => setUrlSelected(person.url)}>{person.name}</h3>
                <p>Año Nacimiento: {person.birth_year}</p>
                <p>Núm. Películas: {person.films.length}</p>
            </div>))
    }
    return (
        <div>
            <div className="people">
                {listPeople}
            </div>
            <PersonDetail url={urlSelected}/>
        </div>
    );
}

export default PeopleList;
