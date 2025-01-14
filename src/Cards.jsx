import React, {useState} from 'react';
import DataFetch from './Fetch.jsx';

// Cards
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';



function Cards ({characters}) {
    return (
        <div>
            {characters.map((character) => (
             <Card sx={{ maxWidth: 345 }} key={character.id}>
                 <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={character.image}
                        alt={character.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {character.name}; 
                        </Typography>
                    </CardContent>
                 </CardActionArea>
             </Card>
            ))}
        </div>
       
      );
}

// how to build cards: https://www.youtube.com/watch?v=CgkZ7MvWUAA

export default Cards 