import React from 'react';
import styles from '../styles/Home.module.css';
import ApiComponent from '../components/ApiComponent';

const ApiPage = () => {
    return (
        <div className={styles.container}>
            <h1>API Page</h1>
            <ApiComponent />
        </div>
    );
};

export default ApiPage;
