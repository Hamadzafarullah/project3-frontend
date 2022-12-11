import { Routes,Route } from 'react-router';
import './App.css';
// import Header from './Header';
// import Search from './Search';
// import Location from './Location';
import Footer from './components/footer';
import Travel from './components/travel';
import Addlocation from "./components/addLoca"
import LocationId from "./components/LocationID"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Search /> */}
      <Routes>
      <Route exact path ="/" element={<Travel />}/>
      <Route exact path = "/addlocation" element={<Addlocation/>}/>
      <Route exact path = "/location/:id" element={<LocationId/>}/>  
      {/* <Location /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;