"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Envs } from "@/config/config";

mapboxgl.accessToken =
  Envs.MAPBOX_TOKEN ||
  "pk.eyJ1IjoidXRzIiwiYSI6ImNsa3cwd2ZybDBndjYzcm4xYTdkN2oxdDkifQ.6zM6x2aivpKiQlDXSU5OSw";

export default function Maps() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(12.550343);
  const [lat, setLat] = useState(55.665957);
  const [zoom, setZoom] = useState(15);

  const mapBoxInit = () => {
    const init = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
      renderWorldCopies: false,
    });

    return init;
  };

  useEffect(() => {
    if (!map.current) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLng(longitude);
          map.current = mapBoxInit();
        },
        (error) => {
          console.error("Error getting current location:", error);
          map.current = mapBoxInit();
        }
      );
    }
  });

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([lng, lat]);

      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = `url(https://placekitten.com/g/${200}/${200}/)`;
      el.style.width = `${80}px`;
      el.style.height = `${80}px`;
      el.style.backgroundSize = "100%";
      el.style.borderRadius = "100%";

      new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>Test aja si</h3>`)
        )
        .addTo(map.current);
    }
  }, [lng, lat]);

  return (
    <>
      <Head>
        <script
          defer
          src="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js"
        ></script>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div ref={mapContainer} className="max-w-max h-screen" />;
    </>
  );
}
