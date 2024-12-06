import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class MeteoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            error: null,
            loading: true,
        };
    }

    fetchUsers = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={492137c3aae2fade6556348cc89b9594}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Error in the API call");
                }
            })
            .then((data) => {
                console.log("JSON RESPONSE", data);
                this.setState({ weatherData: data, loading: false });
            })
            .catch((e) => {
                console.log("Error!", e);
                this.setState({ error: e.message, loading: false });
            });
    };

    componentDidMount() {
        console.log("I am in componentDidMount");
        this.fetchUsers();
    }

    render() {
        const { weatherData, error, loading } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <h1>Meteo</h1>
                <ListGroup>
                    {weatherData && (
                        <ListGroup.Item>
                            <h5>{weatherData.name}</h5>
                            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                            <p>Weather: {weatherData.weather[0].description}</p>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </div>
        );
    }
}

export default MeteoComponent;

// 492137c3aae2fade6556348cc89b9594
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q={city name}&appid={API key}