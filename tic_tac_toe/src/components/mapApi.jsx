import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [totalDistance, setTotalDistance] = useState(null);

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const originCoords = origin.split(",").map(parseFloat);
    const destinationCoords = destination.split(",").map(parseFloat);

    if (originCoords.length !== 2 || destinationCoords.length !== 2) {
      alert(
        'Invalid coordinates. Please enter coordinates in the format "latitude, longitude".'
      );
      return;
    }

    const distance = calculateDistance(originCoords, destinationCoords);
    setTotalDistance(distance.toFixed(2) + " meters");
  };

  const calculateDistance = (originCoords, destinationCoords) => {
    // const originLatLng = L.latLng(originCoords[0], originCoords[1]);
    // const destinationLatLng = L.latLng(
    //   destinationCoords[0],
    //   destinationCoords[1]
    // );
    // return originLatLng.distanceTo(destinationLatLng);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Origin:
          <input
            type="text"
            value={origin}
            onChange={handleOriginChange}
            placeholder="Enter Origin Coordinates (latitude, longitude)"
          />
        </label>
        <br />
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={handleDestinationChange}
            placeholder="Enter Destination Coordinates (latitude, longitude)"
          />
        </label>
        <br />
        <button type="submit">Calculate Total Distance</button>
      </form>
      <div>{totalDistance && <p>Total Distance: {totalDistance}</p>}</div>
      <div style={{ height: "400px", width: "100%" }}>
        <MapContainer center={[0, 0]} zoom={1}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
