import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    const companies = [
        { id: 1, name: 'Company A', lat: 51.505, lon: -0.09 },
        { id: 2, name: 'Company B', lat: 51.515, lon: -0.1 },
        { id: 3, name: 'Company C', lat: 51.525, lon: -0.11 },
    ];
    return (
        <MapContainer
            center={[51.505, -0.09]} // Set the initial center of the map
            zoom={13} // Set the initial zoom level
            style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Render markers for each company */}
            {companies.map((company) => (
                <Marker
                    key={company.id}
                    position={[company.lat, company.lon]}
                >
                    <Popup>{company.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;