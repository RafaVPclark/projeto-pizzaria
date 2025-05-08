import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./MapaPizza.css";

// Corrige ícones do Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Função para calcular a distância entre dois pontos (em km)
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
}

export default function MapaPizza() {
  const [mostrarMapa, setMostrarMapa] = useState(false);
  const [endereco, setEndereco] = useState("");
  const [coordenadasCliente, setCoordenadasCliente] = useState(null);
  const [distancia, setDistancia] = useState(null);

  const posicaoPizzaria = [-19.919198, -43.983462]; // PUC Minas - COREU

  const buscarEndereco = async () => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          endereco
        )}`
      );
      const data = await res.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        const cliente = [parseFloat(lat), parseFloat(lon)];
        setCoordenadasCliente(cliente);
        const dist = haversine(
          cliente[0],
          cliente[1],
          posicaoPizzaria[0],
          posicaoPizzaria[1]
        );
        setDistancia(dist);
      } else {
        alert("Endereço não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  };

  return (
    <div className="mapa-popup-container">
      <button
        className="botao-abrir-mapa"
        onClick={() => setMostrarMapa((prev) => !prev)}
      >
        📍 Ver no Mapa
      </button>

      {mostrarMapa && (
        <div className="mapa-flutuante">
          <button className="fechar-mapa" onClick={() => setMostrarMapa(false)}>
            ❌
          </button>

          <input
            type="text"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            placeholder="Digite seu endereço"
            className="input-endereco"
          />
          <button className="botao-buscar" onClick={buscarEndereco}>
            Ver distância
          </button>

          {distancia && (
            <p className="texto-distancia">
              📏 Você está a <strong>{distancia} km</strong> da pizzaria.
            </p>
          )}

          <MapContainer
            center={posicaoPizzaria}
            zoom={13}
            style={{ height: "300px", width: "100%", borderRadius: "8px" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posicaoPizzaria}>
              <Popup>Pizzaria 🍕</Popup>
            </Marker>

            {coordenadasCliente && (
              <>
                <Marker position={coordenadasCliente}>
                  <Popup>Você está aqui</Popup>
                </Marker>
                <Polyline positions={[posicaoPizzaria, coordenadasCliente]} />
              </>
            )}
          </MapContainer>
        </div>
      )}
    </div>
  );
}
