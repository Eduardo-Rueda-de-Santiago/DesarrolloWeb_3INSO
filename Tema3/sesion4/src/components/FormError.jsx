import '../styles/Form.css'

function FormError({text}) {

    return (
        <p className={"error"}>
            {text}
        </p>
    )

}

export default FormError;