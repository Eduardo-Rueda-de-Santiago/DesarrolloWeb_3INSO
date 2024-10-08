import {useState} from 'react'

function Eventos() {
    const [text, setText] = useState('')
    const [range, setRange] = useState(0)
    const [message, setMessage] = useState('')
    const [coords, setCoords] = useState({x: 0, y: 0})

    const onChangeInput = (event) => {
        setText(event.target.value);
    };

    const onChangeRange = (event) => {
        setRange(event.target.value);
    };

    const handleMouseEnter = (event) => {
        setMessage("Ha entrado el ratón");
    };

    const handleMouseMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        });
    };

    return (
        <div>
            <h2>Eventos</h2>
            <div>
                <p>El valor del campo del texto es: {text}</p>
                <input type='text' onInput={onChangeInput}/>
            </div>
            <div>
                <p>El valor del rango es: {range}</p>
                <input type='range' min={0} defaultValue={0} max={100} step={1} onInput={onChangeRange}/>
            </div>
            <div style={{
                textAlign: 'center',
                width: '25vw',
                height: '25vh',
                backgroundColor: 'green',
            }}
                 onMouseEnter={handleMouseEnter}
                 onMouseMove={handleMouseMove}
            >
                <p>{message}</p>
                <p>Las coordenadas son X:{coords.x}, Y:{coords.y}</p>
            </div>
        </div>
    )
}

export default Eventos;