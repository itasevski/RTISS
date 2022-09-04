import React from "react";
import GoogleMapReact from "google-map-react";
import ISS from "./ISS";
import key from "../utilities/key";

const Map = ({ lat, lng }) => {
    const position = {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 4
    }

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: key }}
                center={position.center}
                zoom={position.zoom}
            >
                <ISS lat={position.center.lat} lng={position.center.lng} text="ISS" />
            </GoogleMapReact>
        </div>
    );
}

export default Map;