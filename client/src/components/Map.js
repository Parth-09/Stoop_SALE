import React from 'react';
import {APIProvider, Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import '../styles.css';

const apiKey = 'AIzaSyCWEG5Y4K7kA9nMFcN-cmVUPdvpoJm9GB0'; // Replace 'YOUR_API_KEY' with your actual Google Maps API key
const address = "2nd Pl & Court St Brooklyn, NY 11231";
const Map = () => {
    // Function to open Google Maps in a new tab for directions
    const openGoogleMaps = () => {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
      window.open(url, '_blank');
    };
  return (
    <div className='map'>
      <div className='overlay' onClick={openGoogleMaps}>
        Get Directions
      </div>
      <APIProvider apiKey={apiKey}>
        <GoogleMap
          defaultCenter={{ lat: 40.67951831009217, lng: -73.99728057411335 }}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
          <Marker position={{ lat: 40.67951831009217, lng: -73.99728057411335 }} />
        </GoogleMap>
      </APIProvider>
    </div>
  );
};

export default Map;
