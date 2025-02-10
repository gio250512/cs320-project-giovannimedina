import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapStyles = {
    height: "100vh",
    width: "100%"
};

const defaultCenter = {
    lat: 36.1699, lng: -115.1398 // Centered on Las Vegas for initial view
};

const locations = [
    { name: "Salt Lake City", location: { lat: 40.7608, lng: -111.8910 } },
    { name: "Los Angeles", location: { lat: 34.0522, lng: -118.2437 } },
    { name: "Las Vegas", location: { lat: 36.1699, lng: -115.1398 } },
    { name: "Portland", location: { lat: 45.5152, lng: -122.6784 } },
];

const Map = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyBYjDrTR53tGE0zmBJvh2UqHjbExb8zfOM">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={6}
                center={defaultCenter}
            >
                {locations.map((item, index) => (
                    <Marker key={index} position={item.location} label={item.name} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
