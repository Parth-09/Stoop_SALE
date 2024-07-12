// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Details from './components/Details.js'
import Map from './components/Map.js'
import ShareButton from './components/Share.js'
import './styles.css'

function App() {
  return (
    <div className="body">
      <Header/>
      <div className='content-wrapper'>
        <div className='details-container'>
        <Details/>
        </div>
        <div className='map-container'>
        {/* AIzaSyCWEG5Y4K7kA9nMFcN-cmVUPdvpoJm9GB0 */}
          <Map/>
        </div>
        
      </div>
      <div>
        <ShareButton/>
      </div>
        
      {/* <Footer/> */}
    </div>
  );
}

export default App;
