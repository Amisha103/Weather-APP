import './App.css';
import Weather from './Components/Weather';
import snow from './assets/veryPretty.jpg';

function App() {
  return (
    <div className="App"  
    style={{ backgroundImage: `url(${snow})` }}>
     
    <Weather></Weather>
    </div>
  );
}

export default App;
