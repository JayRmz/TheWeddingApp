import { useState } from "react";
// import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";

export default function CustomMap() {
  return (
    <div className="grid grid-cols-1 place-items-center">
      <Map
        initialViewState={{
          longitude: -100.11416924248387,
          latitude: 25.79791421379011,
          zoom: 14,
        }}
        mapboxAccessToken="pk.eyJ1IjoiamF5ZGV2OTYiLCJhIjoiY2w4cWxyeHJsMGlxZjNvcW1kcHltbXhodiJ9.SQqz88VkZWktGXSwi6Y0QQ"
        style={{ width: 320, height: 400, padding: 5 }}
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
