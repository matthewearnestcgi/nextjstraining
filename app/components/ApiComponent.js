'use client';

import React, { useState, useEffect } from 'react';

export default function ApiComponent({ planet, weather }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (planet && weather) {
            setLoading(false);
        }
    }, [planet, weather]);

    if (loading) {
        return (
            <div>
                <h2>Planet Information</h2>
                <div style={skeletonStyle}></div>
                <div style={{ ...skeletonStyle, width: '30%' }}></div>

                <h2>Weather Information</h2>
                <div style={skeletonStyle}></div>
                <div style={{ ...skeletonStyle, width: '30%' }}></div>
            </div>
        );
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

const skeletonStyle = {
    backgroundColor: '#ddd',
    borderRadius: '4px',
    margin: '8px 0',
    height: '25px',
    width: '50%'
};
