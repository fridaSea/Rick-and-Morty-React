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
//Flip
import ReactCardFlip from 'react-card-flip';


function DataFetch() {
    //1. state variables at the top
    const [data, setData] = useState(null); // hier wird die Antwort der API gespeichert
    // const [loading, setLoading] = useState(true); // Zustand, der anzeigt, ob die daten noch geladen werden
    const [error, setError] = useState(null); // Zusatnd, der Fehler speichert 
    const [filter, setFiler] = useState(""); // Filter für die Suche

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
    
    //Filterfunktion anwenden
    const handleSearchChange = (e) => {
        setFilter(e.target.value); // Aktualisiert den Filter
      };

    // Gefilterte Daten basierend auf dem Filter
    let filteredData = [];
        if (data) {
        filteredData = data.filter((data) =>
            data.name.toLowerCase().includes(filter.toLowerCase())
        );
        }
    

    const [isFlipped, setIsFlipped] = useState(false);

    //function puts it to the opposite, than it is right now
    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <Container>
               <Grid container spacing={3}>
                     {data && data.map((data) => (
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
                                            <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
                                            Species: {data.species} 
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    </Card>
                                    </div>
                                
                            </div>
                         
                         </div>
                           
                        </Grid>
                    ))}
                </Grid>
            </Container>
    );
};

export default DataFetch;

// ___ CARD FLIP MIT NPM PACKAGE - es flippen aber leider alle cards gleichzeitig
// return (
//     <Container>
//        <Grid container spacing={3}>
//             {data && data.map((data) => (
//                  <Grid item xs={12} md={4} lg={3} key={data.id}> 
//                     <ReactCardFlip flipDirection='vertical' isFlipped={isFlipped}>
                   
//                     <div className='card-front' onClick={flipCard}>
//                          <Card sx={{ maxWidth: 345,
//                          marginTop: '10px',
//                          borderRadius: "8px"
//                      }}>
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="140"
//                                 image={data.image}
//                                 alt={data.name}
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
//                                 {data.name} 
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
//                         </Card>
//                         </div>
                    
//                      {/* Back Side */}
//                        <div className='card-back' onClick={flipCard}>
//                        <Card sx={{ maxWidth: 345,
//                          marginTop: '10px',
//                          borderRadius: "8px"
//                      }}>
//                        <CardActionArea>
                           
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
//                                 {data.name} 
//                                 </Typography>
//                             </CardContent>
//                         </CardActionArea>
                       
//                     </Card>
//                     </div>
//                     </ReactCardFlip>
               
                    
//                 </Grid>
//             ))}
//         </Grid>
//     </Container>
// );
// _______________

// ___________________________________FLIPPEN MIT CSS - Cards flippen aber die Rückseite wird nur als Spiegelung der Vorderseite dargestellt 
// return (
//     <Container>
//        <Grid container spacing={3}>
//             {data && data.map((data) => (
//                  <Grid  item xs={12} md={4} lg={3} key={data.id}> 
//                  <div className='flip-card'>
//                     <div className='flip-card-inner'>
//                         <Card  sx={{ maxWidth: 345,
//                             marginTop: '10px',
//                             borderRadius: "8px"
//                         }}>
//                             <div className='flip-card-front'>
//                             <CardActionArea >
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={data.image}
//                                     alt={data.name}
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
//                                     {data.name} 
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             </div>
                            
//                             <div className='flip-card-back'>
//                             <CardActionArea >
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h5" component="div" sx={{color:'#e4a788'}}>
//                                     Species: {data.species} 
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             </div>
//                         </Card>
//                     </div>
                 
//                  </div>
                   
//                 </Grid>
//             ))}
//         </Grid>
//     </Container>
// );
// -------
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