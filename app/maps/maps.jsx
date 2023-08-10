"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
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
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      renderWorldCopies: false,
    });

    return init;
  };

  useEffect(() => {
    if (!map.current) {
      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLng(longitude);
          map.current = mapBoxInit();
        },
        (error) => {
          console.error("Error getting current location:", error);
          // If there's an error, fallback to default location
          map.current = mapBoxInit();
        }
      );
    }
  });

  useEffect(() => {
    if (map.current) {
      // Update map center when the state changes
      map.current.setCenter([lng, lat]);

      const el = document.createElement("div");
      el.className = "marker";
      el.style.backgroundImage = `url(https://placekitten.com/g/${200}/${200}/)`;
      el.style.width = `${80}px`;
      el.style.height = `${80}px`;
      el.style.backgroundSize = "100%";
      el.style.borderRadius = "100%";

      // make a marker for each feature and add it to the map
      new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>Test aja si</h3>`)
        )
        .addTo(map.current);
    }
  }, [lng, lat]);

  return <div ref={mapContainer} className="absolute top-0 w-full h-screen" />;
}
