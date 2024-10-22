import '../styles/PetAdoptionScreen.css';
import HomeButton from "./HomeButton";
import AdoptionForm from "./AdoptionForm";

function PetAdoptionScreen({petData, screenSetter}) {
    return (
        <div className={"PetAdoptionScreen"}>

            <HomeButton screenSetter={screenSetter}/>
            <div className={"PetCompleteProfile"}>
                <p className={"PetName-Adoption-Screen"}>{petData.nombre}</p>

                <div className={"PetDisplay"}>

                    <div>
                        <img className={"PetFullImage"} src={petData.imagen}/>
                        <button className={"AdoptButton"}
                                onClick={
                                    () => {
                                        screenSetter(<AdoptionForm screenSetter={screenSetter}
                                                                   petData={petData}/>)
                                    }
                                }
                        >Give a new home
                        </button>
                    </div>
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

        </div>
    );

}

export default PetAdoptionScreen;