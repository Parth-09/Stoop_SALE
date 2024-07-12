import React from 'react';
import {APIProvider, Map as GoogleMap, Marker} from '@vis.gl/react-google-maps';
import '../styles.css';

const apiKey = 'AIzaSyCWEG5Y4K7kA9nMFcN-cmVUPdvpoJm9GB0'; // Replace 'YOUR_API_KEY' with your actual Google Maps API key

const Map = () => (
  <APIProvider apiKey={apiKey}>
    <GoogleMap
      style={{width: '35vw', height: '30vh'} }
      defaultCenter={{ lat: 40.67951831009217, lng: -73.99728057411335 }}
      defaultZoom={15}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
    <Marker position={{ lat: 40.67951831009217, lng: -73.99728057411335 }} />
  </APIProvider>
);

export default Map;
