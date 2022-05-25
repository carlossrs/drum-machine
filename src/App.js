import React from "react";
import "./App.css";

function App() {
  const drums = [
    {
      keyCode: 81,
      key: "Q",
      src: "https://www.fesliyanstudios.com/play-mp3/6661",
      id: "bass",
    },
    {
      keyCode: 87,
      key: "W",
      src: "https://www.fesliyanstudios.com/play-mp3/6677",
      id: "stick",
    },
    {
      keyCode: 69,
      key: "E",
      src: "https://www.fesliyanstudios.com/play-mp3/6707",
      id: "hi-hat",
    },
    {
      keyCode: 65,
      key: "A",
      src: "https://www.fesliyanstudios.com/play-mp3/6775",
      id: "snare",
    },
    {
      keyCode: 83,
      key: "S",
      src: "https://www.fesliyanstudios.com/play-mp3/6763",
      id: "high-tom",
    },
    {
      keyCode: 68,
      key: "D",
      src: "https://www.fesliyanstudios.com/play-mp3/6730",
      id: "mid-tom",
    },
    {
      keyCode: 90,
      key: "Z",
      src: "https://www.fesliyanstudios.com/play-mp3/6696",
      id: "low-tom",
    },
    {
      keyCode: 88,
      key: "X",
      src: "https://www.fesliyanstudios.com/play-mp3/6676",
      id: "crash-cymbal",
    },
    {
      keyCode: 67,
      key: "C",
      src: "https://www.fesliyanstudios.com/play-mp3/6732",
      id: "cymbal",
    },
  ];

  function playBeat(item) {
    const beat = document.getElementById(item);
    beat.currentTime = 0;
    beat.play();
  }

  const [display, setDisplay] = React.useState("Drum Machine");

  React.useEffect(() => {
    document.addEventListener("keypress", (event) => {
      playBeat(event.key.toUpperCase());
      drums.forEach((item) => {
        if (event.key.toUpperCase() === item.key) {
          setDisplay(item.id);
        }
      });
    });
  });

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">{display}</div>
        <div id="keyboard">
          {drums.map((drumpad) => (
            <div
              key={drumpad.src}
              onClick={() => {
                playBeat(drumpad.key.toUpperCase());
                setDisplay(drumpad.id);
              }}
              className="drum-pad"
              id={drumpad.id}
            >
              {drumpad.key}
              <audio
                src={drumpad.src}
                className="clip"
                id={drumpad.key}
              ></audio>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
