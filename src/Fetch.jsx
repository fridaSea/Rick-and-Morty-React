import React, {useEffect, useState} from 'react';


function DataFetch() {
    //1. state variables at the top
    const [data, setData] = useState(null); // hier wird die Antwort der API gespeichert
    // const [loading, setLoading] = useState(true); // Zustand, der anzeigt, ob die daten noch geladen werden
    const [error, setError] = useState(null); // Zusatnd, der Fehler speichert 


    useEffect(() => {
        // API-Request
        fetch("https://rickandmortyapi.com/api/character/")
            .then((response) => {
                //console.log("response:>>", response);
                if (!response.ok){
                    setError(true);
                }
            
                return response.json();
            })
            .then((data) => {
                console.log("data:>>", data);   
                setData(data.results); //Daten in den State setzen
                // setLoading(false); // Laden beenden
            })
            .catch((error) => {
            console.log("error:>>", error);
            if (error){
                setError(error); // Fehler im State setzen
            }
           
            //setLoading(false); // Laden beenden
            })
    }, []); // Leeres Array für einmaliges Ausführen
    

    return (
        <div>
            <h1>Characters</h1>
            {data && data.map((character) => {
                return (
                    <p key={character.id}>
                    {character.name}
                    </p>
                    );  
            })};     
            
            {error && <p>Fehler beim Laden der Daten: {error.message}</p>}
        </div>
        );

};

export default DataFetch;