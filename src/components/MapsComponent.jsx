import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import L from "leaflet";

const locations = [
  { id: 1, name: "Location 1", latitude: 1.045462, longitude: 103.96853 },
  { id: 2, name: "Location 2", latitude: 1.058089, longitude: 103.963843 },
  { id: 3, name: "Location 3", latitude: 1.046069, longitude: 103.954859 },
  { id: 4, name: "Location 4", latitude: 1.036577, longitude: 104.002802 },
  { id: 5, name: "Location 5", latitude: 1.030206, longitude: 103.996207 },
  { id: 6, name: "Location 6", latitude: 1.030206, longitude: 103.996207 },
  { id: 7, name: "Location 7", latitude: 1.053174, longitude: 104.005205 },
  { id: 8, name: "Location 8", latitude: 1.027859, longitude: 103.982177 },
  { id: 9, name: "Location 9", latitude: 1.061445, longitude: 104.031922 },
  { id: 10, name: "Location 10", latitude: 1.055577, longitude: 104.034829 },
  { id: 11, name: "Location 11", latitude: 1.038924, longitude: 104.048187 },
];

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const userIcon = new L.Icon({
  iconUrl: "/pin-map.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

const nearestIcon = new L.Icon({
  iconUrl: "/gps.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

// Fungsi untuk menghitung jarak menggunakan rumus haversine
const getDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const MapComponent = ({ onNearestLocationsChange }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestLocations, setNearestLocations] = useState([]);

  // Fungsi untuk memperbarui lokasi terdekat
  const updateNearestLocations = (latitude, longitude) => {
    const distances = locations.map((location) => ({
      ...location,
      distance: getDistance(
        latitude,
        longitude,
        location.latitude,
        location.longitude
      ),
    }));

    // Mengurutkan lokasi berdasarkan jarak dan memilih 3 terdekat
    distances.sort((a, b) => a.distance - b.distance);
    const nearest = distances.slice(0, 3);
    setNearestLocations(nearest);

    if (onNearestLocationsChange) {
      onNearestLocationsChange(nearest);
    }
  };

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        updateNearestLocations(latitude, longitude);
      },
      (error) => {
        console.error("Error mendapatkan lokasi:", error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  return (
    <MapContainer
      center={userLocation || [1.054507, 104.00412]}
      zoom={13}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>
            <b>Your Location</b>
          </Popup>
        </Marker>
      )}

      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={
            nearestLocations.find((loc) => loc.id === location.id)
              ? nearestIcon
              : customIcon
          }
        >
          <Popup>
            <b>{location.name}</b>
            <br />
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

MapComponent.propTypes = {
  onNearestLocationsChange: PropTypes.func,
};

export default MapComponent;
