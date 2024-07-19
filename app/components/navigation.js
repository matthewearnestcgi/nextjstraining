import Link from 'next/link';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <li className={styles.li}><Link href="/">Home</Link></li>
                <li className={styles.li}><Link href="/about">About Me</Link></li>
                <li className={styles.li}><Link href="/apipage">API Page</Link></li>
            </ul>
        </nav>
    );
}
