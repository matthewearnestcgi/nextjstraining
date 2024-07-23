import React, { Suspense } from 'react';
import styles from '../styles/Home.module.css';
import ApiComponent from '../components/ApiComponent';
import Skeleton from '../components/Skeleton';

const ApiPage = () => {
    return (
        <div className={styles.container}>
            <h1>API Page</h1>
            <Suspense fallback={<Skeleton />}>
                <ApiComponent />
            </Suspense>
        </div>
    );
};

export default ApiPage;
