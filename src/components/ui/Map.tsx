"use client";
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useStore } from "@/store";
import "leaflet/dist/leaflet.css";


interface IMap {
  center: [number, number];
  zoom: number;
}

export const Map = () => {
  const { ipLocation } = useStore();

  const icon = new L.Icon({
    iconUrl: "/images/icon-location.svg",
  }); 

  const ChangeView = ({ center, zoom }: IMap) => {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  };

  if (!ipLocation) return null;

  return (
    <MapContainer
      center={[ipLocation?.location.latitud, ipLocation?.location.longitud]}
      zoom={13}
      scrollWheelZoom
      className="w-full h-full"
      style={{
        zIndex: 0,
        position: "absolute",
        height:"61vh",
        width:"100%",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker
        position={[ipLocation?.location.latitud, ipLocation?.location.longitud]}
        icon={icon}
      >
        <Popup>{ipLocation?.ip}</Popup>
      </Marker>
      <ChangeView
        center={[ipLocation?.location.latitud, ipLocation?.location.longitud]}
        zoom={13}
      />
    </MapContainer>
  );
};
