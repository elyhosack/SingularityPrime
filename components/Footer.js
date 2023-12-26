import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.flexbox}>
          <div className={styles.item}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className={styles.item}>
            <h3>Social</h3>
            <ul>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://x.com">X</a></li>
            </ul>
          </div>
          <div className={styles.item}>
            <h3>Address</h3>
            <ul>
              <li>33 Wolcott Drive</li>
              <li>Granby, CT 06035-1320</li>
            </ul>
          </div>
        </div>

      </footer>
    </>
  )
}
