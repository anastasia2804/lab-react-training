function Greetings (props) {

    let myLanguage;
    if (props.lang === "fr") {
        myLanguage = 'Bonjour' 
    } else if (props.lang === "de") {
       myLanguage = 'Halo'
    } else {
        myLanguage = 'Hello'
    }
        
    return (
        <div style={{marginBottom: "10px", padding: "10px", border: "1px solid black"}}>
            <span>{myLanguage} </span>
            <span>{props.children} </span>
        </div>
    );
}

export default Greetings;