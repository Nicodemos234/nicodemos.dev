import styles from './LinkCard.module.css'

function LinkCard({text, href}) {
    return (
        <a target="_blank" href={href} className={styles.linkcard}>
            {text}
        </a>
    )
}

export default LinkCard
