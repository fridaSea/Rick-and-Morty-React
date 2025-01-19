import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import DataFetch from './Fetch/Fetch.jsx';
// Searchfield
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Fade from '@mui/material/Fade';
import { Box, InputAdornment, makeStyles } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';


const Navbar = ({ filter, onSearchChange }) => {
  return (
    <>
      <AppBar position="static" > 
        <Toolbar
        sx={{display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
          <Box 
            sx={{ display: 'flex',
                  backgroundColor: '#e0e0e0',
                  margin: '10px',
                }}>
            <TextField id="filled-basic" label="Search by Name" variant="filled"
              value={filter} 
              onChange={onSearchChange}
                 slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon 
                          sx={{ alignSelf: 'flex-end',
                                margin: '5px',
                              }}>
                          </SearchIcon>
                        </InputAdornment>
                      ),
                    },
                  }}>
            </TextField>

          </Box>

        </Toolbar>
      </AppBar>
     

    </>
  )
}

export default Navbar
