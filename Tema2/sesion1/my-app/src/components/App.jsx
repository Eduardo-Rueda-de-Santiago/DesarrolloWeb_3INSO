import '../style/App.css';
import {Component} from "react";
import Ticks from './Ticks';
import Tarjeta from './Tarjeta';

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
            // <div className="App">
            //     {this.saludar(this.persona1)}
            //     {this.saludar()}
            //     <Ticks titulo="Hora"/>
            // </div>
            <div>
                <Tarjeta
                    nombre="Eduardo Rueda"
                    email="eduardo.rueda@live.u-tad.com"
                    cargo="Estudiante"
                    telefono="1234567890"
                ></Tarjeta>
                <Tarjeta
                    nombre="Anónimo 1"
                    email="anon.1@live.u-tad.com"
                    cargo="Estudiante"
                    telefono="0987654321"
                ></Tarjeta>
                <Tarjeta
                    nombre="Anónimo 2"
                    email="anon.2@live.u-tad.com"
                    cargo="Estudiante"
                    telefono="989739797"
                ></Tarjeta>
            </div>
        );
    }
}


export default App;
