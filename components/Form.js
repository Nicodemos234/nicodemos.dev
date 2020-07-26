import styles from './Form.module.css'

function Form() {
    return <div className={styles.form}>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" required id="name"></input>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input required type="email" id="email"></input>
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea required id="message"></textarea>
            </div>
            <button>Send</button>
        </form>
    </div>
}

export default Form