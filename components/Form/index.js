import styles from './Form.module.css'
import { useState } from 'react'

function Form() {

    const startValues = {
        name: '',
        email: '',
        message: '',
    }

    const [contact, setContact] = useState(startValues)

    const [error, setError] = useState('')

    function setValue(key, value) {
        setContact({
            ...contact,
            [key]: value
        });

        validate(key, value);
    }
    function validate(key, value) {
        if (key == 'name' && value.length < 5) {
            setError('Name must be at least 5 characters long')
        } else if (key == 'email' && !validateEmail(value)) {
            setError('Enter a valid email address')
        } else if (key == 'message' && value.length < 30) {
            setError('Message must be at least 30 characters long')
        } else {
            setError('')
        }
    }

    function handleChange(event) {
        setValue(event.target.getAttribute('name'), event.target.value);
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return <div className={styles.form}>
        {error != '' ? <div className={styles.error}>{error}</div> : ''}
        <form onSubmit={function handleSubmit(event) {
            event.preventDefault();
            if (contact.name.length < 5) {
                setError('Name must be at least 5 characters long')
            } else if (!validateEmail(contact.email)) {
                setError('Enter a valid email address')
            } else if (contact.message.length < 30) {
                setError('Message must be at least 30 characters long')
            } else {
                setError('')
                setContact(startValues);
            }
        }}>
            <div>
                <label htmlFor="name">Name</label>
                <input value={contact.name} type="text" required id="name" name="name" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input value={contact.email} required type="email" id="email" name="email" onChange={handleChange}></input>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea value={contact.message} required id="message" name="message" onChange={handleChange}></textarea>
            </div>
            <button>Send</button>
        </form>

    </div>
}

export default Form