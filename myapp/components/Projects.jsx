import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import Layout from './Layout';

const projects = [
  {
    id: 7, slug: "ora", title: "Ora", image: "ora.pf.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Illustrator", "Photoshop"],
    role: "Designer Graphique"
  },
  {
    id: 3, slug: "fishco", title: "FishCo", image: "FishCo.jpg",
    description: "Une application destinée aux pêcheurs",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["React", "Express", "PostgreSQL"],
    role: "Développeur Full Stack"
  },
  {
    id: 8, slug: "tee-shirt", title: "Tee-shirt", image: "runclub.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Illustrator", "Photoshop"],
    role: "Designer Graphique"
  },
  {
    id: 9, slug: "blender", title: "Blender", image: "blender.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Blender", "Cycles"],
    role: "Designer 3D"
  },
  {
    id: 2, slug: "lippi", title: "LIPPI", image: "lippi.png",
    description: "Un site vitrine sur l'aménagement extérieur.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Développeur Front-end"
  },
  {
    id: 5, slug: "dashboard", title: "DashBoard", image: "dashboard.png",
    description: "Création de plusieurs dashboard pour suivi de KPI.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["React", "D3.js", "Python"],
    role: "Développeur Data"
  },
  {
    id: 10, slug: "affiche-sportive", title: "Affiche Sportive", image: "Etikikz.png",
    description: "Création d'affiches sportives pour des événements locaux.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    role: "Designer Graphique",
    gallery: ["Etikikz.png", "Doncic.png", "White.png"]
  },
  {
    id: 1, slug: "peace", title: "Peace", image: "PEACE.jpg",
    description: "Une application mobile sur la gestion de vie colocative.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    role: "Développeur Full Stack"
  },
  {
    id: 4, slug: "tahaavroom", title: "Taha'a Vroom", image: "tahaavroom.png",
    description: "Développement de maquette pour une entreprise locale.",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Figma", "React", "CSS"],
    role: "Designer & Développeur"
  },
  {
    id: 6, slug: "joshfit", title: "JoshFit", image: "joshfit.png",
    description: "Création de site Web pour un coach sportif",
    fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    technologies: ["Next.js", "Tailwind CSS", "Strapi"],
    role: "Développeur Full Stack"
  },
];

export { projects };

function Projects() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.project}>
              <img src={`/${project.image}`} alt={project.title} className={styles.projectImage} />
              <div className={styles.info}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <Link href={`/projects/${project.slug}`}>
                  <button className={styles.btn}>Voir plus</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
