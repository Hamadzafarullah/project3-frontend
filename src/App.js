import { Routes,Route } from 'react-router';
import './App.css';
import Footer from './components/footer';
import Title from './components/title';
import Travel from './components/travel';
import Addlocation from "./components/addLoca"
import LocationId from "./components/LocationID"
import UpdateLoca from "./components/updateLoca"

function App() {
  return (
    <div className="App">
      <Title />
      <Routes>
      <Route exact path ="/" element={<Travel />}/>
      <Route exact path = "/addlocation" element={<Addlocation/>}/>
      <Route exact path = "/location/:id" element={<LocationId/>}/> 
      <Route exact path = "/location/:id/update" element={<UpdateLoca/>}/> 


      {/* <Location /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;