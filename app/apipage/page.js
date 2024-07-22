// ApiPage.js
import React, { Suspense } from 'react';
import fetch from 'node-fetch';
import https from 'https';
import styles from '../styles/Home.module.css';
import ApiComponent from '../components/ApiComponent';
import Skeleton from '../components/Skeleton';

// Create an agent to bypass SSL certificate validation
const agent = new https.Agent({
    rejectUnauthorized: false
});

async function fetchData() {
    const planetRes = await fetch('https://api.le-systeme-solaire.net/rest/bodies/earth', { agent });
    const planetData = await planetRes.json();

    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&hourly=temperature_2m`, { agent });
    const weatherData = await weatherRes.json();

    return { planet: planetData, weather: weatherData };
}

// suspense boundary added
const ApiPage = async () => {
    const { planet, weather } = await fetchData();

    return (
        <div className={styles.container}>
            <h1>API Page</h1>
            <Suspense fallback={<Skeleton />}>
                <ApiComponent planet={planet} weather={weather} />
            </Suspense>
        </div>
    );
};

export default ApiPage;
