'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/ContactForm.module.css';

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [responseMessage, setResponseMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async (data) => {
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return await response.json();
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            throw error;
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            const result = await sendMessage(data);
            setResponseMessage(result.message);
        } catch (error) {
            setResponseMessage('Failed to send message');
        } finally {
            setLoading(false);
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
                    <input id="email" type="email" {...register('email', { required: 'Email is required' })} />
                    {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message:</label>
                    <textarea id="message" {...register('message')}></textarea>
                </div>
                <button className={styles.button} type="submit" disabled={loading}>Send</button>
                <button className={styles.button} type="button" onClick={() => { reset(); setResponseMessage(''); }} disabled={loading}>Reset</button>
            </form>
            {responseMessage && <p className={styles.responseMessage}>{responseMessage}</p>}
        </div>
    );
}
