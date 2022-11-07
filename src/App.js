import './App.css';
import sound from './audio/Minecraft_Hit.mp3';
import Move from './Move'
import KeyStroke from './KeyStroke'

function App() {
  function play() {
    new Audio(sound).play();
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={play}>playsound</button>
        <KeyStroke/>
        <Move />    
      </header>
    </div>
  );
}

export default App;