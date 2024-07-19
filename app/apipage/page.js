import RootLayout from '/app/layout';
import styles from '../styles/Home.module.css';
import ApiComponent from '../components/ApiComponent';

export default function ApiPage() {
    return (
        <RootLayout>
            <div className={styles.container}>
                <h1>API Page</h1>
                <ApiComponent />
            </div>
        </RootLayout>
    );
}
