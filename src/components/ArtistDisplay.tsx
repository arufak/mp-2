import styled from 'styled-components';
import { Artist } from '../interfaces/Artist'; // Import the Artist interface

// Styled container for all artists
const AllArtistsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  padding: 2%;
`;

// Styled component for a single artist
const SingleArtistDiv = styled.div`
  background-color: white;
  color: black;
  border: 5px black solid;
  padding: 2%;
  margin: 1%;
  font: 1.5 rem;
  text-align: center;
  width: 50%;
  max-width: 600px;
  border-radius: 10px;
`;

interface ArtistDisplayProps {
  artists: Artist[]; // Use the Artist interface for the props
}

export default function ArtistDisplay({ artists }: ArtistDisplayProps) {
  return (
    <AllArtistsDiv>
      {artists.map((artist, index) => (
        <SingleArtistDiv key={index}>
          <h2>Artist {index + 1}:</h2>
          <p><strong>Name:</strong> {artist.name}</p>
          <p><strong>Country:</strong> {artist.country || 'Not Available'}</p>
          <p><strong>Disambiguation:</strong> {artist.disambiguation || 'Not Available'}</p>
          <p><strong>Type:</strong> {artist.type || 'Not Available'}</p>
        </SingleArtistDiv>
      ))}
    </AllArtistsDiv>
  );
}
