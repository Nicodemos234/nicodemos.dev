import styles from './Header.module.css'
import Link from '../Link'

function Header() {
    return <header className={styles.header}>
        <div className={styles.nicodemos}>
            NICODEMOS.DEV
        </div>
        <nav>
            <ul>
                <li><Link activeClassName={styles.active} href="/"><a>Home</a></Link></li>
                <li><Link activeClassName={styles.active} href="/works"><a>Works</a></Link></li>
                <li><Link activeClassName={styles.active} href="/links"><a>Links</a></Link></li>
            </ul>
        </nav>
    </header>
}

export default Header