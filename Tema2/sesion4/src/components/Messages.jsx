function SuccessfulLoginMessage({loginData}) {

    return (
        <div>
            <p>Login successful!</p>
            <p>Welcome {loginData.password}</p>
        </div>
    );

}

function FailedLoginMessage({loginData}) {
    return (
        <div>
            <p>Login failed!</p>
            <p>You are not {loginData.password}</p>
        </div>
    );
}

export {SuccessfulLoginMessage, FailedLoginMessage};