'use client';

import React, { useState, useEffect } from 'react';
import Skeleton from "../components/Skeleton.js"
import https from 'https';

// Create an agent to bypass SSL certificate validation
const agent = new https.Agent({
    rejectUnauthorized: false
});

export default function ApiComponent() {
    const [loading, setLoading] = useState(true);
    const [planet, setPlanet] = useState(null);
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const planetRes = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth', { agent });
                const planetData = await planetRes.json();
                setPlanet(planetData);

                const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m`, { agent });
                const weatherData = await weatherRes.json();
                setWeather(weatherData);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <Skeleton />;
    }

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
