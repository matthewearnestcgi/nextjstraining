import RootLayout from '/app/layout.js';
import styles from '../styles/About.module.css';
import ContactForm from '../components/ContactForm';

export default function About() {
    return (
        <RootLayout>
            <div className={styles.container}>
                <div className={styles.aboutMe}>
                    <h1>About Me</h1>
                    <img src="/profile.jfif" alt="Me" className={styles.profilePic} />
                    <h2>Name: Matthew Earnest</h2>
                    <h3>College: University of Alabama</h3>
                    <p>Interesting Fact: I have done hobbyist game dev work.</p>
                    <p>Worked at CGI for: 1 month</p>
                </div>
                <div className={styles.contactForm}>
                    <ContactForm />
                </div>
            </div>
        </RootLayout>
    );
}
