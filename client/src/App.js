// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Details from './components/Details.js'
import Map from './components/Map.js'
import './styles.css'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content-wrapper'>
      <Details/>
      <Map/>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
