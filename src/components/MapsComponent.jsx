import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Data sample untuk marker
const locations = [
  { id: 1, name: "Location 1", latitude: -6.2, longitude: 106.816666 },
  { id: 2, name: "Location 2", latitude: -6.914744, longitude: 107.60981 },
  { id: 3, name: "Location 3", latitude: -7.250445, longitude: 112.768845 },
];

// Custom Icon untuk Marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/252/252025.png", // URL gambar untuk ikon marker
  iconSize: [32, 32],
  iconAnchor: [16, 32], // titik anchor untuk ikon
});

const MapComponent = () => {
  return (
    <MapContainer
      center={[-6.2, 106.816666]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          icon={customIcon}
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

export default MapComponent;
