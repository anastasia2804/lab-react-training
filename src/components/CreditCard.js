function CreditCard (props) {
    console.log(props)
    
const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
}
    return (
        <div style={divStyle} className="row-container">
            <div className="card">
                <div className="type">{props.type}</div>
                <div className="number">{props.number}</div>
                <div className="exp">Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}</div>
                <div className="owner">{props.owner}</div>
            </div>
        </div>
    );

}

export default CreditCard;