import {Field, Form, Formik, useFormik} from 'formik';
import * as Yup from 'yup';

function Contacto() {

    const formik = useFormik({
        initialValues: {name: '', surname: '', email: ''},
        validationSchema: Yup.object({

            name: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),

            surname: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),

            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),

        }),
        onSubmit: values => {
            console.log(values);
        }
    })

    return (
        <div><h3>Formulario de contacto</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        {...formik.getFieldProps('name')} />
                    {formik.touched.name && formik.errors.name ? (
                        <div>{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input
                        type="text"
                        name="surname"
                        id="surname"
                        {...formik.getFieldProps('surname')} />
                    {formik.touched.surname && formik.errors.surname ? (
                        <div>{formik.errors.surname}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                </div>
                <button type="submit">Enviar</button>
            </form>

        </div>
    );

}

export default Contacto;