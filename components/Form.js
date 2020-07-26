import styles from './Form.module.css'

function Form() {
    return <div className={styles.form}>
        <form>
            <div>
                <label for="name">Name</label>
                <input id="name"></input>
            </div>
            <div>
                <label for="email">Email</label>
                <input id="email"></input>
            </div>
            <div>
                <label for="message">Message</label>
                <textarea id="message"></textarea>
            </div>
            <button>Send</button>
        </form>
    </div>
}

export default Form