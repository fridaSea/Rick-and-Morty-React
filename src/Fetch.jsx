import React, {useEffect, useState} from 'react';
import './App.css'

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
import { Container } from '@mui/material';


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
    }, []) // Leeres Array für einmaliges Ausführen
    
   
    //     color: '#44281d',

    return (
        <Container>
           <Grid container spacing={3}>
                {data && data.map((data) => (
                     <Grid item xs={12} md={4} lg={3} key={data.id}> 
                        <Card sx={{ maxWidth: 345,
                             marginTop: '10px',
                             borderRadius: "8px"
                         }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={data.image}
                                    alt={data.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
                                    {data.name} 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default DataFetch;


    //     <div>
    //        <h1>Characters</h1>
    //        <div>
    //        {data && data.map((data) => (
    //         <Card sx={{ maxWidth: 345 }} key={data.id}>
    //             <CardActionArea>
    //                <CardMedia
    //                    component="img"
    //                    height="140"
    //                    image={data.image}
    //                    alt={data.name}
    //                />
    //                <CardContent>
    //                    <Typography gutterBottom variant="h5" component="div">
    //                    {data.name} 
    //                    </Typography>
    //                </CardContent>
    //             </CardActionArea>
    //         </Card>
    //        ))}
    //         </div>
    //    </div>


  
 
//  function CharacterGrid(){
//     return(
//          <div>
//             <h1>Characters</h1>
//             <div>
//             {data && data.map((data) => (
//              <Card sx={{ maxWidth: 345 }} key={data.id}>
//                  <CardActionArea>
//                     <CardMedia
//                         component="img"
//                         height="140"
//                         image={data.image}
//                         alt={data.name}
//                     />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                         {data.name} 
//                         </Typography>
//                     </CardContent>
//                  </CardActionArea>
//              </Card>
//             ))}
//              </div>
//         </div>

        // <div>
        //     <Grid container>
        //         <Grid item xs={12} md={4} lg={2}>
        //         </Grid>

        //         <Grid item xs={12} md={4} lg={2}>
        //         </Grid>
        //     </Grid>
        // </div>
   
    // ENDE

    //    <Container>
    //         {/* <h1>Characters</h1> */}

    //             <Grid container>
    //             {data && data.map(data) => (
    //                 <Grid item xs={12} md={4} lg={2}>
    //                     <Card sx={{ maxWidth: 345 }} key={data.id}></Card>
    //                     <CardMedia
    //                         component="img"
    //                         height="140"
    //                         image={data.image}
    //                         alt={data.name}
    //                     />
    //                     <CardContent>
    //                         <Typography gutterBottom variant="h5" component="div">
    //                         {data.name} 
    //                         </Typography>
    //                     </CardContent>
    //                     </Card>
    //                 </Grid>

    //             )}
    //             </Grid>
    //     </Container>
//         )
// }