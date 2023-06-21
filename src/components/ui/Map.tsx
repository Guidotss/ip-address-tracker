"use client";
import { useStore } from "@/store";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import style from './map.module.css';
import "leaflet/dist/leaflet.css";

export const Map = () => {
  const { ipLocation } = useStore();
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={true}
      style={{
        height: "61vh",
        width: "100%",
        zIndex: 0,
      }}
      
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};
