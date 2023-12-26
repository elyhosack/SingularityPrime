import styles from './Navigation.module.css'
import Link from 'next/link'
export default function Navigation() {
    return (
        <>
        <nav className={styles.nav}>
                <div className={styles.logo}>
                    <Link href="/"><img src="./SingularityPrime.png" alt="logo" /></Link>
                </div>
                <div className={styles.menu}>
                    <div className={styles.item}>
                        <Link href="/">Home</Link>
                    </div>
                    <div className={styles.item}>
                        <Link href="/about">About</Link>
                    </div>
                    <div className={`${styles.item}`} id="trigger">
                        <Link href="/">Services</Link>
                    </div>
                    <div id="dropdown">
                        <h1>Hiiiii</h1>
                    </div>
                    <div className={styles.item}>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
    
        </nav>
        </>
    )
}