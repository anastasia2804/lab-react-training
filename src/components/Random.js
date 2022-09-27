function Random (props) {
    console.log(props)
    let randomNumber = Math.floor(Math.random() * (props.max - props.min + 1) + props.min)

    return (
        <p style={{marginBottom: "10px", padding: "10px", border: "1px solid black"}}>
        Random value between {props.min} and {props.max} is {randomNumber}
        </p>
    );
}

export default Random;