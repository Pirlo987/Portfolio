import styles from '../styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>Pirlooo.</div>

                <nav className={styles.menu}>
                    <Link href="/"><a className={styles.link}>Home</a></Link>
                    <Link href="/about"><a className={styles.link}>About</a></Link>
                    <Link href="/projects"><a className={styles.link}>Projects</a></Link>
                    <Link href="/contact"><a className={styles.link}>Contact</a></Link>
                </nav>
            </div>
            <p className={styles.copyright}>© {new Date().getFullYear()} Pirlooo. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
