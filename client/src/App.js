import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from "react-map-gl";
import "./App.css"; // Importing the global CSS

import Nav from "./components/navbar/Nav";
import ControlPanelMenu from "./components/control-panel/ControlPanelMenu";
import PinMarker from "./components/pins/pins";
import PopupWithCarousel from "./components/popup/PopupWithCarousel"; // Import the new component
import Landing from "./components/landing/Landing";
import NotFound from "./components/not-found/NotFound";
const TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

// Dummy data for testing
const DUMMY_CITIES = [
  {
    id: 1,
    city: "Mike's Candy Shop",
    state: "State A",
    longitude: -98,
    latitude: 37.9,
    pros: "Pros A",
    cons: "Cons A",
    image: "https://via.placeholder.com/150",
    owner: "Hayden Owens",
  },
  {
    id: 2,
    city: "City B",
    state: "State B",
    longitude: -98,
    latitude: 37.9,
    pros: "Pros B",
    cons: "Cons B",
    image: "https://via.placeholder.com/150",
    owner: "Bryce Paxton",
  },
  {
    id: 3,
    city: "City C",
    state: "State C",
    longitude: -98,
    latitude: 37.9,
    pros: "Pros C",
    cons: "Cons C",
    image: "https://via.placeholder.com/150",
    owner: "Allison M",
  },
  {
    id: 4,
    city: "City C",
    state: "State C",
    longitude: -94.2088,
    latitude: 36.3729,
    pros: "Pros C",
    cons: "Cons C",
    image: "https://via.placeholder.com/150",
    owner: "Superman",
  },
  {
    id: 5,
    city: "Barry's Barbershop",
    state: "Illinois",
    longitude: -87.6818,
    latitude: 41.8376,
    pros: "Pros C",
    cons: "Cons C",
    owner: "TM",
  },
];

function MapPage() {
  const [popupInfo, setPopupInfo] = useState(null);

  const getCitiesAtLocation = (longitude, latitude) => {
    return DUMMY_CITIES.filter(
      (city) => city.longitude === longitude && city.latitude === latitude
    );
  };

  const handleMarkerClick = (e, city) => {
    e.originalEvent.stopPropagation();
    setPopupInfo(getCitiesAtLocation(city.longitude, city.latitude));
  };

  return (
    <>
      <Map
        initialViewState={{
          latitude: 37.9,
          longitude: -98,
          zoom: 3.99,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
        style={{ width: "100vw", height: "100vh", position: "fixed" }}
      >
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {DUMMY_CITIES.map((city, index) => (
          <Marker
            key={`marker-${index}`}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor="bottom"
            onClick={(e) => handleMarkerClick(e, city)}
          >
            <PinMarker latitude={city.latitude} longitude={city.longitude} />
          </Marker>
        ))}

        {popupInfo && popupInfo.length > 0 && (
          <PopupWithCarousel
            popupInfo={popupInfo}
            setPopupInfo={setPopupInfo}
          />
        )}

        <ControlPanelMenu />
      </Map>
    </>
  );
}

export default function App() {

  return (
    <Router>
      {/* Nav is not necessary right now for landing page */}
      {/* <nav>
        <Nav />
      </nav> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all 404 route */}
      </Routes>
    </Router>
  );
}
