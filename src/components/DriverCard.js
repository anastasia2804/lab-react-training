function DriverCard (props) {

    console.log(props)
 return (
    <div className="card-driver">
        <div>
            <img className="driver-image" src={props.img} alt="driver's card"/>
        </div>
        <div>
            <h2>{props.name}</h2>
            <p>{props.car.model} - {props.car.licensePlate} </p>

        </div>
    </div>
 );
}

export default DriverCard;