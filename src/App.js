import logo from './logo.svg';
import './App.css';
import Move from './Move'
import KeyStroke from './KeyStroke'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Move />
        <KeyStroke />    
      </header>
    </div>
  );
}

/*
document.onkeydown = function(key)
{
  let text = document.getElementById('keypressed').innerHTML;
  if(key.key !== 'backspace') {
    document.getElementById('keypressed').innerHTML += key.key;
  } else {
    text = text.length - 1;
  }
}*/

export default App;
