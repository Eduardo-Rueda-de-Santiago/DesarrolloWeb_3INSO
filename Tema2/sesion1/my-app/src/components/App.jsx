import '../style/App.css';
import {Component} from "react";
import Ticks from './Ticks';

class App extends Component {

    constructor(props) {
        super(props);
        this.persona1 = {
            nombre: "Alicia",
            apellido: "Romero",
            edad: "34"
        }

    }

    nombreCompleto(persona) {
        return persona.nombre + ' ' + persona.apellido
    }

    saludar(persona) {
        return (persona) ? <h1>Hola {this.nombreCompleto(persona)}</h1> : <h1>Hola
            desconocido</h1>
    }

    render() {
        return (
            <div className="App">
                {this.saludar(this.persona1)}
                {this.saludar()}
                <Ticks titulo="Hora"/>
            </div>
        );
    }
}


export default App;
