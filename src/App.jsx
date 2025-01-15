import Footer from './Footer.jsx';
//import Cards from './Cards.jsx'; 
import DataFetch from './Fetch.jsx';
//import CharacterGrid from './Fetch.jsx';
import Navbar from './Navbar.jsx';
import { styled } from '@mui/material/styles';
import './App.css'

//Font Import
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// const useStyles = makeStyles({
//   cardStyle:{
//     margin: '10px',
//     color: '#44281d',
//   },
// });


function App() {
  return(
    <> 
     <Navbar/>
    <DataFetch/>
    {/* <Cards/> */}
    {/* <CharacterGrid/> */}
    <Footer/>
    <div>
      
    </div>
    </>
  );
}

export default App