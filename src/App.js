
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,ComedyMovies,HorrorMovies,RomanceMovies,Documentaries,ActionMovies } from './Url';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <RowPost url={originals} title='Originals' />
     <RowPost url={ActionMovies} title='Action' isSmall /> 
     <RowPost url={ComedyMovies} title='Comedy' isSmall/> 
     <RowPost url={RomanceMovies} title='Romance' isSmall /> 
     <RowPost url={HorrorMovies} title='Horror' isSmall />
     <RowPost url={Documentaries} title='Documentaries' isSmall />
           
    </div>
  );
}

export default App;
