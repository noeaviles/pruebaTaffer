import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 20.55417,
    lng: -105.26455
  };

const Maps = () => {

return (
    <LoadScript
      googleMapsApiKey="AIzaSyCNPtY-f86NUG1clvGKtiLSRaZfZhj-uEw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
      >
      </GoogleMap>
    </LoadScript>
  ) 
}

export default Maps


