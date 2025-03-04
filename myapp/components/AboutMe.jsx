import styles from '../styles/AboutMe.module.css';
import Layout from './Layout';  // Import du Layout
import Services from './Services';
import Experience from './Experience';

function AboutMe() {
    return (
        <Layout> {/* Ajout du Layout comme wrapper autour de tout le contenu */}
            <div className={styles.container}>
                <h1 className={styles.title}>About Me</h1>

                {/* Contenu en deux colonnes */}
                <div className={styles.content}>
                    {/* Partie gauche - Texte */}
                    <div className={styles.leftPart}>
                        <p>
                            Je m'appelle Brieuc et je suis originaire de Tahiti,
                            où j'ai grandi dans un environnement riche en culture
                            et en paysages inspirants. Après avoir passé une grande 
                            partie de ma jeunesse sur l'île, j'ai décidé de poursuivre 
                            mes études en France pour me spécialiser dans le domaine du commerce.
                            J'ai suivi un cursus de trois ans en commerce, avant de compléter un 
                            master en webmarketing, ainsi qu'un bootcamp de code, afin d'approfondir 
                            mes compétences techniques et créatives. <br/><br/><br/>
                            Ce parcours m'a permis de développer 
                            une solide compréhension des stratégies numériques et de la gestion de projets.
                            Aujourd'hui, de retour à Tahiti, je mets mes compétences au service de projets 
                            innovants et passionnants, en combinant mes connaissances en marketing digital 
                            et en développement pour aider les entreprises locales à se développer et à s'adapter 
                            à un monde de plus en plus connecté. 
                            <br/><br/><br/>Mon parcours éclectique et mes expériences 
                            variées m'ont appris à aborder les défis avec créativité, flexibilité et détermination,
                            et je suis ravie de pouvoir contribuer au développement de ma région avec les 
                            outils modernes du digital.
                        </p>
                    </div>

                    {/* Partie droite - Image + Contact */}
                    <div className={styles.rightPart}>
                        <img className={styles.photo} src="photoCV.jpg" alt="Profile Image" />

                        <div className={styles.contactInfo}>
                            <p>Email : <span>brieuc.vannier931@gmail.com</span></p>
                            <p>Tel : <span>+689 87 30 35 79</span></p>
                        </div>
                    </div>
                </div>

                <Services />
            </div>
            <Experience />
        </Layout>
    );
}

export default AboutMe;
