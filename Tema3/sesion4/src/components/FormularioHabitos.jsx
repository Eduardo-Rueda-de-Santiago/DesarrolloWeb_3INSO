import {useForm} from "react-hook-form";
import FormError from "./FormError";


function FormularioHabitos({addFormData, finishForm, changeFormScreen}) {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (values) => {

        addFormData('habitosPersonales', values);

        finishForm();

        changeFormScreen();

    }

    return (
        <div>
            <h2>Hábitos personales</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Hago deporte</label>
                    <select {...register('deporteSemana', {required: true})}>
                        <option value="">Nunca</option>
                        <option value="UnaODos">Una o dos veces por semana</option>
                        <option value="TresACinco">De tres a cinco veces a la semana</option>
                        <option value="SeisMas">Seis días o más cada semana</option>
                    </select>
                    <br/>
                    {errors.entrenamiento?.type === 'required' &&
                        <FormError text={"El tipo de entrenamiento es requerido"}/>}
                </div>
                <div>
                    <label>Alimentación</label>
                    <select {...register('alimentacion', {required: true})}>
                        <option value="">Prefiero no decirlo</option>
                        <option value="mala">McDonals 4 life</option>
                        <option value="mejorable">Las verduras existen</option>
                        <option value="media">Dieta balanceada</option>
                        <option value="buena">Mi dietista me quiere</option>
                    </select>
                    <br/>
                    {errors.entrenamiento?.type === 'required' &&
                        <FormError text={"El tipo de entrenamiento es requerido"}/>}
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default FormularioHabitos;