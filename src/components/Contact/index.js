import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email:'', message: '' });

    const { name, email, message } = formState;

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage(`your email is invalid`);
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required`) 
                    console.log('errorMessage: ', errorMessage)
                } else {
                    setErrorMessage('')
                    if (!errorMessage) {
                        setFormState({ ...formState, [e.target.name]: e.target.value });
                      }
                }
            }
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    
        console.log(formState)
    }
    
    return(
        <section>
            <h1 data-testid="h1tag">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" data-testid="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;