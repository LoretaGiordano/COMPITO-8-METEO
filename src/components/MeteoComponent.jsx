import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";

class MeteoComponent extends Component {
state={
    meteo:[],
}

    fetchUsers = () => {
        fetch(`api.openweathermap.org/data/2.5/weather?q={cityname}&appid={5fb43d9317a963bf83907952a8a8a3f3}`)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                } else {
                    throw new Error("Error in the API call");
                }
            })
            .then((data) => {
                console.log("JSON RESPONSE", data);
                this.state({
                    meteo: data,
                })
            })
            .catch((e) => {
                console.log("Error!", e);
            });
    };

    componentDidMount() {
        console.log("I am in componentDidMount");
        this.fetchUsers();
    }

    render() {
        return (
            <div>
                <h1>Meteo</h1>
                <ListGroup>
                    {/* {weatherData && (
                        <ListGroup.Item>
                            <h5>{weatherData.name}</h5>
                            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
                            <p>Weather: {weatherData.weather[0].description}</p>
                        </ListGroup.Item>
                    )} */}
                </ListGroup>
            </div>
        );
    }
}

export default MeteoComponent;

// 492137c3aae2fade6556348cc89b9594
// https://pro.openweathermap.org/data/2.5/forecast/hourly?q={cityname}&appid={APIkey}