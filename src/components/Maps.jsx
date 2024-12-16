import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const LocationMarker = ({ onLocationFound }) => {
  const [position, setPosition] = useState(null);
  const map = useMap();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          const newPosition = [latitude, longitude];
          setPosition(newPosition);
          map.flyTo(newPosition, 13);
          onLocationFound(newPosition);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, [map, onLocationFound]);

  return position === null ? null : <Marker position={position} />;
};

LocationMarker.propTypes = {
  onLocationFound: PropTypes.func.isRequired,
};

const Maps = ({ onLocationChange }) => {
  const handleLocationFound = (location) => {
    onLocationChange(location);
  };

  return (
    <MapContainer
      center={[1.054507, 104.00412]}
      zoom={13}
      scrollWheelZoom={true}
      className="w-full h-full z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker onLocationFound={handleLocationFound} />
    </MapContainer>
  );
};

Maps.propTypes = {
  onLocationChange: PropTypes.func.isRequired,
};

export default Maps;
