function Ball({position}) {

    return (
        <div id="ball" style={{
            position: 'absolute',
            top: `${position.x}px`,
            left: `${position.y}px`,
            backgroundColor: 'red',
            width: '1vw',
            height: '2.5vh'
        }}/>
    );
}

export default Ball;