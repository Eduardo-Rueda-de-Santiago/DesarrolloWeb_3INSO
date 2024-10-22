import Home from "./Home";
import '../styles/PetAdoptionScreen.css';

function PetAdoptionScreen({petData, screenSetter}) {
    return (
        <div className={"PetAdoptionScreen"}>
            <button className={"HomeButton"} onClick={() => screenSetter(<Home screenSetter={screenSetter}/>)}>
                Home
            </button>
            <div className={"PetCompleteProfile"}>
                <p className={"PetName"}>{petData.nombre}</p>

                <div className={"PetDisplay"}>

                    <img className={"PetFullImage"} src={petData.imagen}/>

                    <div className={"PetData"}>

                        <p>{petData.tipo}</p>
                        <p>{petData.edad}</p>
                        <p>{petData.genero}</p>
                        <p>Descripción</p>
                        <div dangerouslySetInnerHTML={{__html: petData.desc_fisica}}/>
                        <p>Personalidad</p>
                        <div dangerouslySetInnerHTML={{__html: petData.desc_personalidad}}/>
                        <p>Historia</p>
                        <div dangerouslySetInnerHTML={{__html: petData.desc_adicional}}/>

                    </div>
                </div>

            </div>

            <div className={"AdoptForm"}></div>
        </div>
    );

}

export default PetAdoptionScreen;