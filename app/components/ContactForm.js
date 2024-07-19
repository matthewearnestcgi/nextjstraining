'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [responseMessage, setResponseMessage] = useState('');

    // Local API handler for testing purposes
    const sendMessage = async (data) => {
        // Simulate an API call with a delay
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'Sent' });
            }, 1000);
        });
    };

    const onSubmit = async (data) => {
        try {
            const result = await sendMessage(data);
            setResponseMessage(result.message);
        } catch (error) {
            console.error('There was a problem with the operation:', error);
            setResponseMessage('Failed to send message');
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contact Me</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name:</label>
                    <input id="name" {...register('name', { required: true })} />
                    {errors.name && <span className={styles.errorMessage}>Name is required</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email:</label>
                    <input id="email" {...register('email', { required: true })} />
                    {errors.email && <span className={styles.errorMessage}>Email is required</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message:</label>
                    <textarea id="message" {...register('message')}></textarea>
                </div>
                <button className={styles.button} type="submit">Save</button>
                <button className={styles.button} type="button" onClick={() => { reset(); setResponseMessage(''); }}>Reset</button>
            </form>
            {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
        </div>
    );
}
