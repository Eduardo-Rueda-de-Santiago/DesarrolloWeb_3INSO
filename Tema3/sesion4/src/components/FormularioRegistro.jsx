import {useForm} from "react-hook-form";
import FormError from "./FormError";


function FormularioRegistro() {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data) => {

        try {

            fetch('myApi', {

                method: 'POST',

                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(data)

            })
                .then((response) => {

                    if (response.status === 404) {

                        console.log("URL NOT FOUND");
                        console.log(data);

                    }

                    console.log(response);
                });

        } catch (error) {

            console.log("REQUEST FAILED");
            console.log(data);

        }
    }

    return (
        <div>
            <h1>Gimnasio 123</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input {...register('nombre', {required: true, maxLength: 20})} />
                    <br/>
                    {errors.nombre?.type === 'required' && <FormError text={"Nombre es requerido"}/>}
                    {errors.nombre?.type === 'maxLength' &&
                        <FormError text={"Nombre debe tener menos de 20 caracteres"}/>}
                </div>
                <div>
                    <label>Apellidos</label>
                    <input {...register('apellidos', {required: true, maxLength: 30})} />
                    <br/>
                    {errors.apellidos?.type === 'required' && <FormError text={"Apellidos es requerido"}/>}
                    {errors.apellidos?.type === 'maxLength' &&
                        <FormError text={"Apellidos debe tener menos de 20 caracteres"}/>}
                </div>
                <div>
                    <label>Email</label>
                    <input {...register('email', {required: true, maxLength: 30})} />
                    <br/>
                    {errors.email?.type === 'required' && <FormError text={"Apellidos es requerido"}/>}
                    {errors.email?.type === 'maxLength' &&
                        <FormError text={"Email debe tener menos de 20 caracteres"}/>}
                </div>
                <div>
                    <label>Teléfono</label>
                    <input {...register('telefono', {required: true, maxLength: 30})} />
                    <br/>
                    {errors.telefono?.type === 'required' && <FormError text={"Apellidos es requerido"}/>}
                    {errors.telefono?.type === 'maxLength' &&
                        <FormError text={"Teléfono debe tener menos de 20 caracteres"}/>}
                </div>
                <div>
                    <label>Tipos de entrenamiento</label>
                    <select {...register('entrenamiento', {required: true})}>
                        <option value="">Ninguno</option>
                        <option value="NoClaro">No lo tengo claro</option>
                        <option value="Resistencia">Resistencia</option>
                        <option value="Fuerza">Fuerza</option>
                    </select>
                    <br/>
                    {errors.entrenamiento?.type === 'required' &&
                        <FormError text={"El tipo de entrenamiento es requerido"}/>}
                </div>
                <div>
                    <label>Dirección</label>
                    <input {...register('direccion', {required: true})} />
                    <br/>
                    {errors.direccion?.type === 'required' && <FormError text={"Dirección es requerida"}/>}
                </div>
                <input type="submit"/>
            </form>
        </div>
    );
}

export default FormularioRegistro;