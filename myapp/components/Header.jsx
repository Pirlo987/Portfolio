import { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
        }).replace('.', '');
        // You can set the formatted date here if you need it elsewhere
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <span className={styles.logo}>Pirlooo.</span>
                    </Link>
                </div>

                {/* Menu burger */}
                <button
                    className={styles.burgerMenu}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Menu */}
                <nav className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <Link href="/">
                        <span className={styles.link}>Home</span>
                    </Link>
                    <Link href="/aboutMe">
                        <span className={styles.link}>About Me</span>
                    </Link>
                    <Link href="/projects">
                        <span className={styles.link}>Projects</span>
                    </Link>
                    
                </nav>

                <div className={styles.mid}>
                <a 
                    href="mailto:brieuc.vannier931@gmail.com?subject=Prise de rendez-vous&body=Bonjour, je souhaiterais prendre un rendez-vous avec vous." 
                    className={styles.btn}
                >
                    <span className={styles.btnText}>
                        Prendre RDV
                    </span>
                </a>
                </div>
                
            </div>
        </div>
    );
}

export default Header;
