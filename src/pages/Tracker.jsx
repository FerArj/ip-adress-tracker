import { useState } from 'react';
import Header from "../components/Header";
import CardDesc from '../components/CardDesc';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios'

function Tracker() {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [ipAddressData, setIpAddressData] = useState({
    ipAddress: '',
    location: '',
    timezone: '',
    isp: '',
  });

  async function handleSearch(ipAddress) {
    try {
      const response = await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_qJOM3MR9BMJfqEeKXO9am5eDpwAP3&ipAddress=${ipAddress}`);
      const { lat, lng } = response.data.location;
      console.log(response.data)
      setLat(lat);
      setLng(lng);
      setIpAddressData({
        ipAddress: response.data.ip,
        location: `${response.data.location.city}, ${response.data.location.country}`,
        timezone: response.data.location.timezone,
        isp: response.data.isp,
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header onSearch={handleSearch} />
      <div style={{ width: '100vw', height: '61vh' }}>
        <MapContainer key={`${lat}-${lng}`} center={[lat, lng]} zoom={13} style={{ height: '100%', position: 'sticky'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
          />
          {lat !== 0 && lng !== 0 && <Marker position={[lat, lng]} />}
        </MapContainer>
      </div>
      <CardDesc 
        ipAdress={ipAddressData.ipAddress}
        location={ipAddressData.location}
        timezone={ipAddressData.timezone}
        isp={ipAddressData.isp}
      />
    </div>
  );
}

export default Tracker;
