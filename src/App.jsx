import React, { useState } from 'react';
import Footer from './Footer.jsx';
import DataFetch from './Fetch/Fetch.jsx';
import Navbar from './Navbar.jsx';
import { styled } from '@mui/material/styles';
import './App.css';

//Font Import
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Hier verwalte ich den Zustand vom Filter und übergebe ihn über die Props an Navbar und DataFetch
function App() {
  const [filter, setFilter] = useState(""); // Filter für die Suche verwalten

  //Filterfunktion anwenden
  const handleSearchChange = (e) => {
    setFilter(e.target.value); // Aktualisiert den Filter
  };

  return(
    <> 
    <Navbar filter={filter} onSearchChange={handleSearchChange}/> 
      {/* Übernimmt die Sucheingabe / Filter an Navbar übergeben */}
    <DataFetch filter={filter}/>
      {/* Lädt die API und zeigt sie an & Filter an DataFetch übergeben  */}
    <Footer/>
    <div>
      
    </div>
    </>
  );
}

export default App