import { useState } from "react";
// import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";

export default function CustomMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 100,
  });
  return (
    <div className="grid place-content-center p-5">
      <Map
        initialViewState={{
          longitude: -100.11416924248387,
          latitude: 25.79791421379011,
          zoom: 14,
        }}
        mapboxAccessToken="pk.eyJ1IjoiamF5ZGV2OTYiLCJhIjoiY2w4cWxyeHJsMGlxZjNvcW1kcHltbXhodiJ9.SQqz88VkZWktGXSwi6Y0QQ"
        style={{ width: 400, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          latitude={25.79791421379011}
          longitude={-100.11416924248387}
          anchor="center"
        ></Marker>
      </Map>
    </div>
  );
}
