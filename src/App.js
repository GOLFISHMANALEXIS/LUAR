import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Cama y mesa",
      artist: "Roberto Carlos",
      img_src: "./images/song-1.jpg",
      src: "./music/camaymesa.mp3"
    },
    {
      title: "Remolino",
      artist: "Samo",
      img_src: "./images/song-2.jpg",
      src: "./music/remolino.mp3"
    },
    {
      title: "Besame",
      artist: "Ricardo Montaner",
      img_src: "./images/song-3.jpg",
      src: "./music/besamericardo.mp3"
    },
    {
      title: "Labios rotos ",
      artist: "Zoe",
      img_src: "./images/song-4.jpg",
      src: "./music/labiosrotos.mp3"
    },
    {
      title: "Soñe",
      artist: "Zoe",
      img_src: "./images/song-4.jpg",
      src: "./music/soñe.mp3"
    },
    {
      title: "Love",
      artist: "Zoé",
      img_src: "./images/song-19.jpg",
      src: "./music/love.mp3"
    },
    {
      title: "sweater weather",
      artist: "the neighbourhood",
      img_src: "./images/song-5.jpg",
      src: "./music/sweater.mp3"
    },
    {
      title: "Reflections",
      artist: "the neighbourhood",
      img_src: "./images/song-5.jpg",
      src: "./music/reflection.mp3"
    },
    {
      title: "Eres",
      artist: "Café Tacvba",
      img_src: "./images/song-6.jpg",
      src: "./music/erescafe.mp3"
    },
    {
      title: "Aprovechate",
      artist: "Café Tacvba",
      img_src: "./images/song-7.jpg",
      src: "./music/aprovechate.mp3"
    },
    {
      title: "Quiero ver",
      artist: "Café Tacvba",
      img_src: "./images/song-13.jpg",
      src: "./music/quiero.mp3"
    },
    {
      title: "Solo tu",
      artist: "Luis Miguel",
      img_src: "./images/song-8.jpg",
      src: "./music/solotu.mp3"
    },
    {
      title: "Amarte Es Un Placer",
      artist: "Luis Miguel",
      img_src: "./images/song-20.jpg",
      src: "./music/placer.mp3"
    },
    {
      title: "Hoy El Aire Huele a Ti",
      artist: "Luis Miguel",
      img_src: "./images/song-22.jpg",
      src: "./music/aire.mp3"
    },
    {
      title: " La Gloria Eres Tú",
      artist: "Luis Miguel",
      img_src: "./images/song-25.jpg",
      src: "./music/gloria.mp3"
    },
    {
      title: "Te Necesito",
      artist: "Luis Miguel",
      img_src: "./images/song-26.jpg",
      src: "./music/necesito.mp3"
    },
    {
      title: "A Kiss",
      artist: "The Driver Era",
      img_src: "./images/song-9.jpg",
      src: "./music/kiss.mp3"
    },
    {
      title: "Perfume de gardenias",
      artist: "Sonora Santanera",
      img_src: "./images/song-10.jpg",
      src: "./music/perfume.mp3"
    },
    {
      title: "Enamorado tuyo",
      artist: "Cuarteto de nos",
      img_src: "./images/song-11.jpg",
      src: "./music/tuyo.mp3"
    },
    {
      title: "Eres para mi",
      artist: "Julieta Venegas",
      img_src: "./images/song-12.jpg",
      src: "./music/mia.mp3"
    },
    {
      title: "Bonita",
      artist: "Los Choclok",
      img_src: "./images/song-14.jpg",
      src: "./music/bonita.mp3"
    },
    {
      title: "Locos",
      artist: "León Larregui ",
      img_src: "./images/song-15.jpg",
      src: "./music/locos.mp3"
    },
    {
      title: "Contigo",
      artist: "Natalia Lafourcade",
      img_src: "./images/song-16.jpg",
      src: "./music/sinti.mp3"
    },
    {
      title: "Tu geografia",
      artist: "Indios",
      img_src: "./images/song-18.jpg",
      src: "./music/geogra.mp3"
    },
    {
      title: "Happy Together",
      artist: "The Turtles",
      img_src: "./images/song-17.jpg",
      src: "./music/happy.mp3"
    },
    {
      title: "Creep",
      artist: "Radiohead",
      img_src: "./images/song-21.jpg",
      src: "./music/crip.mp3"
    },
    {
      title: "Die for you",
      artist: "The weeknd",
      img_src: "./images/song-23.jpg",
      src: "./music/die.mp3"
    },
    {
      title: "CLOSE TO YOU",
      artist: "CARPENTERS",
      img_src: "./images/song-24.jpg",
      src: "./music/close.mp3"
    },

  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
