import './App.css';
import sound from './audio/Minecraft_Hit.mp3';
import Move from './Move';
import KeyStroke from './KeyStroke';
// var ffmpeg = require('ffmpeg');
// import ToMp3 from './ToMp3';

function App() {
  function play() {
    new Audio(sound).play();
      setTimeout(() => {
        new Audio(sound).play();
      }, 1000);
  }
  function convertVideo() {
    // let url = document.getElementById('url').value;
    // if (url != '') {
try {
    //var process = new ffmpeg('./audio/testvideo.mp4');
    process.then(function (video) {
      //Callback mode
      video.fnExtractSoundToMP3('./audio/test.mp3', function (error, file) {
        if(!error) {
          console.log('Audio file: ' + file);
        } 
      })
    }, function (error) {
      console.log('Error: ' + error);
    });
    console.log('placeholder');
  } catch(err) {
    console.log(err.code);
    console.log(err.msg);
  }
  //}
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={play}>playsound</button>
        <form>
          <input type='text' id="url" placeholder="url to yt video"></input>
          <button type='submit' onClick={convertVideo} disabled>Convert!</button>
        </form>
        <KeyStroke />
        <Move />    
      </header>
    </div>
  );
}

export default App;