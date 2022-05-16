import 'leaflet/dist/leaflet.css';
import numeral from "numeral";
import { Circle, MapContainer as LeafletMap, Popup, TileLayer } from "react-leaflet";
import "../Map.css";

function Map({ countries, casesType }) {
  const casesTypeColors = {
    cases: {
      hex: "#CC1034",
      rgb: "rgb(204, 16, 52)",
      half_op: "rgba(204, 16, 52, 0.5)",
      multiplier: 100,
    },
    recovered: {
      hex: "#7dd71d",
      rgb: "rgb(125, 215, 29)",
      half_op: "rgba(125, 215, 29, 0.5)",
      multiplier: 1200,
    },
    deaths: {
      hex: "#fb4443",
      rgb: "rgb(251, 68, 67)",
      half_op: "rgba(251, 68, 67, 0.5)",
      multiplier: 2000,
    },
  };

  return (
    <div className="map">
      <LeafletMap center={{ lat: 21, lng: 105.8 }} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries.map((country) => (
          <Circle
            center={[country.countryInfo.lat, country.countryInfo.long]}
            color={casesTypeColors[casesType].hex}
            fillColor={casesTypeColors[casesType].hex}
            fillOpacity={0.4}
            radius={
              Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
            }
          >
            <Popup>
              <div className="info-container">
                <div className="wrap-flag-name">
                  <div
                    className="info-flag"
                    style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
                  />
                  <div className="info-name">{country.country}</div>
                </div>
                <div className="info-confirmed">
                  Nhiễm: {numeral(country.cases).format("0,0")}
                </div>
                <div className="info-recovered">
                  Khỏi: {numeral(country.recovered).format("0,0")}
                </div>
                <div className="info-deaths">
                  Tử vong: {numeral(country.deaths).format("0,0")}
                </div>
              </div>
            </Popup>
          </Circle>
        ))}
      </LeafletMap>
    </div >
  );
}

export default Map;
