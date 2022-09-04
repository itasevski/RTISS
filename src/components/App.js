import React from "react";
import Map from "./Map";
import ISSService from "../services/ISSService";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: undefined, lng: undefined }

    render() {
        if(this.state.lat || this.state.lng) {
            return (
                <Map lat={this.state.lat} lng={this.state.lng} />
            );
        }
        return (
            <Spinner text="Fetching ISS location..." />
        );
    }

    componentDidMount() {
        setInterval(() => {
            this.fetchISSLocation();
        }, 1000);
    }

    fetchISSLocation = async () => {
        const { data } = await ISSService.getISSLocation();

        this.setState({
            lat: parseFloat(data.iss_position.latitude),
            lng: parseFloat(data.iss_position.longitude)
        });
    }
}

export default App;