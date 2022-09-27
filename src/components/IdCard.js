function IdCard (props) {

    return (
        <div style={{display: 'flex', marginBottom: "10px", padding: "10px", border: "1px solid black"}}>
            <div>
                <img style={{marginRight: "20px"}} src={props.picture} alt=""/>
            </div>
            <div>
                <p style ={{ margin: 0, textAlign: "left", fontSize: "16px"}}>First name: {props.firstName}</p>
                <p style ={{ margin: 0, textAlign: "left", fontSize: "16px"}}>Last name: {props.lastName}</p>
                <p style ={{ margin: 0, textAlign: "left", fontSize: "16px"}}>Gender: {props.gender}</p>
                <p style ={{ margin: 0, textAlign: "left", fontSize: "16px"}}>Height: {props.height}</p>
                <p style ={{ margin: 0, textAlign: "left", fontSize: "16px"}}>Birth: {props.birth.toString()}</p>
            </div>
        </div>
    );
}

export default IdCard;