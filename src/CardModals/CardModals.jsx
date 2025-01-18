import { Box, Button, CardMedia, Modal, Typography } from '@mui/material';
import React, {useState} from 'react';
import './CardModals.css';

function CardModals({data}) {
    const [open, setOpen] = useState(false);
    // Open & close the Modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>More Information</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="Box" key={data.id}>
          <Typography id="modal-modal-title" variant="h6" component="h2" gutterBottom>
              {data.name}
            </Typography>
          <CardMedia
                        component="img"
                        sx = {{width:'60%', aspectRatio:'1', textAlign:'center'}}
                        image={data.image}
                        alt={data.name}
            />
           
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Status: {data.status}
            </Typography>
            
            <Typography id="modal-modal-description">
                Species: {data.species} 
            </Typography>
            
            <Typography id="modal-modal-description">
                Gender: {data.gender}
            </Typography>
            <Button className='CloseButton' onClick={handleClose}>Close</Button>
          </Box>
        </Modal>
      </div>
    );
  }

  export default CardModals;