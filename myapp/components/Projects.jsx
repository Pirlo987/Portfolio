import styles from '../styles/Projects.module.css';
import Layout from './Layout';

const projects = [
  { id: 1, title: "Peace", image: "PEACE.jpg", description: "Une application mobile sur la gestion de vie colocative." },
  { id: 2, title: "LIPPI", image: "lippi.png", description: "Un site vitrine sur l'aménagement extérieur." },
  { id: 3, title: "FishCo", image: "FishCo.jpg", description: "Une application destinée aux pêcheurs" },
  { id: 4, title: "Taha'a Vroom", image: "tahaavroom.png", description: "Développement de maquette pour une entreprise local." },
  { id: 5, title: "DashBoard", image: "dashboard.png", description: "Création de plusieurs dashboard pour suivie de KPI. " },
  { id: 6, title: "JoshFit", image: "joshfit.png", description: "Création de site Web pour un coach sportif" }
];

function Projects() {
  return (
    <Layout>
      <div className={styles.container}>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.info}>
                <div className={styles.textContainer}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
                <button className={styles.btn}>Voir plus</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
