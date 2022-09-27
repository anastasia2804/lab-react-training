function BoxColor(props) {

 let r = props.r
 let g = props.g
 let b = props.b

 const divStyle = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`
 }


 return(
    <div style={divStyle}>
   rgb ({props.r} {props.g} {props.b})
    </div>

 );
}

export default BoxColor;