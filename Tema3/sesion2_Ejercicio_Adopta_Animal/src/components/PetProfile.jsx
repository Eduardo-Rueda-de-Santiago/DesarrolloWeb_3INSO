import '../styles/PetProfile.css';
import PetAdoptionScreen from "./PetAdoptionScreen";

function PetProfile({petData, screenSetter}) {
    //onClick={screenSetter(<PetAdoptionScreen screenSetter={screenSetter}/>)}
    return (
        <div
            className={"PetProfile"}
            onClick={() => {
                screenSetter(<PetAdoptionScreen petData={petData} screenSetter={screenSetter}/>)
            }}
        >
            <p className={"PetName"} style={{color: `${petData.color}`}}>{petData.nombre}</p>
            <div className={"PetCard"}>
                <img className={"PetImage"} src={petData.imagen}/>
                <div className={"PetData"}>
                    <p>{petData.tipo}</p>
                    <p>{petData.edad}</p>
                    <p>{petData.genero}</p>
                    <p>Esta esterilizado/a: {petData.esterilizado === 1 ? "Sí" : "No"}</p>
                </div>

            </div>

        </div>
    );
}

export default PetProfile;