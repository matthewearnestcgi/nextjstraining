import React from 'react';

async function fetchData() {
    const planetRes = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth');
    const planetData = await planetRes.json();

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m`);
    const weatherData = await weatherRes.json();

    return { planet: planetData, weather: weatherData };
}

export default async function ApiComponent() {
    const { planet, weather } = await fetchData();

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
