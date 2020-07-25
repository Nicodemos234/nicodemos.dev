import styles from './Header.module.css';
import Link from './Link'

function Header() {
    return <div className={styles.header}>
        <div className={styles.nicodemos}>
            NICODEMOS.DEV
        </div>
        <nav>
            <ul>
                <li><Link activeClassName={styles.active} href="/"><a>Home</a></Link></li>
                <li><Link activeClassName={styles.active} href="/works"><a>Works</a></Link></li>
                <li><Link activeClassName={styles.active} href="/contact"><a>Contact</a></Link></li>
            </ul>
        </nav>
    </div>
}

export default Header