import { useEffect, useState } from 'react';
import './App.css';
import ArtistDisplay from './components/ArtistDisplay';
import { Artist } from './interfaces/Artist'; // Import the Artist interface

function App() {
  const [artists, setArtists] = useState<Artist[]>([]); // Use the Artist interface for state

  // Fetch artist data from MusicBrainz API
  const fetchArtists = async () => {
    const response = await fetch('https://musicbrainz.org/ws/2/artist/?query=beatles&fmt=json');
    const data = await response.json();
    setArtists(data.artists.slice(0, 10)); // Limit to 10 artists
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  return (
    <div className="app">
      <h1>MusicBrainz API Artists Info!</h1>
      <ArtistDisplay artists={artists} /> {/* Pass the artists array */}
    </div>
  );
}

export default App;
