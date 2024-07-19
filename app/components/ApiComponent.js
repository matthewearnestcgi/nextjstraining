import React from 'react';

export default function ApiComponent({ planet, weather }) {

    return (
        <div>
            <div>
                <h2>Planet Information</h2>
                {planet ? (
                    <div>
                        <p>Name: {planet.englishName}</p>
                        <p>Gravity: {planet.gravity}</p>
                    </div>
                ) : (
                    <p>Loading planet information...</p>
                )}
            </div>
            <div>
                <h2>Weather Information</h2>
                {weather && weather.hourly && weather.hourly.temperature_2m ? (
                    <div>
                        <p>City: Tokyo</p>
                        <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
                    </div>
                ) : (
                    <p>Loading weather information...</p>
                )}
            </div>
        </div>
    );
}
