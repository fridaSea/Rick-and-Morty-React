import Footer from './Footer.jsx';
//import Cards from './Cards.jsx'; 
import DataFetch from './Fetch.jsx';
//import CharacterGrid from './Fetch.jsx';

//Font Import
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return(
    <> 
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