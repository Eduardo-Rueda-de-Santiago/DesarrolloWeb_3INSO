function Paddle({position}) {

    return (
        <div className="paddle" style={{
            position: 'absolute',
            top: `${position.x}px`,
            left: `${position.y}px`,
            backgroundColor: 'green',
            width: '2%',
            height: '30%',
        }}>

        </div>
    );
}

export default Paddle;