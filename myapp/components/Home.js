import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from './Header';
import Link from 'next/link';
import Footer from './Footer';
import { FaArrowDown } from "react-icons/fa"; // Import de la flèche
import Portfolio from './Portfolio';
import Banner from './Banner';
import Layout from './Layout'; // Import du Layout

function Home() {
  return (
    <Layout> {/* Ajout du Layout comme wrapper autour de tout le contenu */}
      <Head>
        <title>Portfolio Brieuc Vannier</title>
        <meta name="description" content="Découvrez le portfolio de Brieuc Vannier, développeur frontend et expert en webmarketing & design." />
      </Head>

      <div className={styles.container}>
        <h1 className={styles.title}>Web, Marketing & Design <br /> All in one</h1>
        <p className={styles.paragraphe}>
          Hello, je suis Brieuc, un developper frontend mais 
          aussi chargé de webmarketing afin d'assurer une visibilité sur le digital. 
          Une dernière chose, je design aussi !
        </p>
        
        <div className={styles.network}>
          <Link href="https://www.linkedin.com/in/brieucvannier/" passHref>
            <a id={styles.logo} className={styles.activities} target="_blank" rel="noopener noreferrer">
              <img className={styles.logo} src="Logo/logo-linkedin.png" alt="LinkedIn" />
            </a>
          </Link>
          <Link href="https://github.com/Pirlo987" passHref>
            <a id={styles.logo} className={styles.activities} target="_blank" rel="noopener noreferrer">
              <img className={styles.logo} src="Logo/github.png" alt="GitHub" />
            </a>
          </Link>
        </div>

        {/* Flèche qui invite à scroller */}
        <div className={styles.arrow}>
          <FaArrowDown />
        </div>
      </div>

      <Portfolio />
      <Banner />
      
    </Layout>
  );
}

export default Home;
