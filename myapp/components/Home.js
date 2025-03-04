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
      <div className={styles.container}>
        <h1 className={styles.title}>Web, Marketing & Design <br /> All in one</h1>
        <p className={styles.paragraphe}>
          Hello, je suis Brieuc, un developper frontend mais 
          aussi chargé de webmarketing afin d'assurer une visibilité sur le digital. 
          Une dernière chose, je design aussi !
        </p>
        
        <div className={styles.network}>
          <Link href="#">
            <a id={styles.logo} className={styles.activities}>
              <img className={styles.logo} src="Logo/logo-linkedin.png" />
            </a>
          </Link>
          <Link href="#">
            <a id={styles.logo} className={styles.activities}>
              <img className={styles.logo} src="Logo/github.png" />
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
