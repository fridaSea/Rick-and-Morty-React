import React, {useEffect, useState} from 'react';
import '../App';
import './fetch.css'


// Cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
//Grid
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Button, Container } from '@mui/material';
//Flip
import ReactCardFlip from 'react-card-flip';


function DataFetch( {filter} ) {
    //1. state variables at the top
    const [data, setData] = useState(null); // hier wird die Antwort der API gespeichert
    // const [loading, setLoading] = useState(true); // Zustand, der anzeigt, ob die daten noch geladen werden
    const [error, setError] = useState(null); // Zusatnd, der Fehler speichert 
    const [isFlipped, setIsFlipped] = useState(false); //Zustand für das Drehen der Karte

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
    }, []) // Leeres Array für einmaliges Ausführen
    
    

    // Filter anwenden
    let filteredData = [];
        if (data) {
        filteredData = data.filter((data) =>
            data.name.toLowerCase().includes(filter.toLowerCase())
        );

    //function puts it to the opposite, than it is right now
    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <Container>
            {filteredData.length === 0 && filter !== "" ? ( // Wenn keine Daten gefunden und Filter gesetzt
                <Typography variant="h5" component="div" sx={{color:'#e4a788', textAlign:'center', marginTop: '20px'}}>
                    No results found for "{filter}"
                </Typography>
            ) : (
               <Grid container spacing={3}>
                     {data && filteredData.map((data) => (
                         <Grid  item xs={12} md={4} lg={3} key={data.id}> 
                         <div className='flip-card'>
                            <div className='flip-card-inner'>
                                 <div className='flip-card-front'>
                                    <Card sx={{ maxWidth: 345,
                                    marginTop: '10px',
                                    borderRadius: "8px"
                                    }}>
                                    <CardActionArea >
                                        <CardMedia
                                            component="img"
                                            image={data.image}
                                            alt={data.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{
                                                color:'#e4a788',
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                                }}>
                                            {data.name} 
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    </Card>
                                    </div>
                                    
                                    <div className='flip-card-back'>
                                    <Card sx={{ maxWidth: 345,
                                    height: "100%",
                                    borderRadius: "8px"
                                    }}>
                                    <CardActionArea >
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788', textAlign:'center'}}>
                                            Species: {data.species} 
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <Button variant="outlined" size="medium" color="primary" sx={{marginTop:'20px'}}>
                                            More Info
                                            </Button>
                                    
                                        
                                       
                                    </Card>
                                    </div>
                                
                            </div>
                         
                         </div>
                           
                        </Grid>
                    ))}
                </Grid>
            )}
            </Container>
    );
};
};

export default DataFetch;