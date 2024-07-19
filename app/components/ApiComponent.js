'use client'

import { useEffect, useState } from 'react';

export default function ApiComponent() {
    const [planet, setPlanet] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const planetRes = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth');
            const planetData = await planetRes.json();
            setPlanet(planetData);

            const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m`);
            const weatherData = await weatherRes.json();
            setWeather(weatherData);
        }

        fetchData();
    }, []);

    return (
        <div>
            <div>
                <h2>Planet Information</h2>
                {planet && (
                    <div>
                        <p>Name: {planet.englishName}</p>
                        <p>Gravity: {planet.gravity}</p>
                    </div>
                )}
            </div>
            <div>
                <h2>Weather Information</h2>
                {weather && weather.hourly && weather.hourly.temperature_2m && (
                    <div>
                        <p>City: Tokyo</p>
                        <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
                    </div>
                )}
            </div>
        </div>
    );
}
