import './App.css';
import Header from './Header';
import Search from './Search';
import Location from './Location';
import Footer from './Footer';
import Travel from './Travel';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Travel />
      <Location/>
      {/* <Location /> */}
      <Footer />
    </div>
  );
}

export default App;