import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import Layout from './Layout';

const projects = [
  {
    id: 7, slug: "ora", title: "Ora", image: "ora.pf.png",
    description: "Refonte e-commerce d'un site télécom pour commander mobiles, box et forfaits.",
    fullDescription: "Dans le cadre de mon poste chez Ora, j'ai piloté la refonte complète du site internet, transformé en une plateforme e-commerce performante et optimisée. L'objectif était de permettre aux clients de commander directement en ligne l'ensemble des produits et services télécom — mobiles, box internet et forfaits — depuis une expérience fluide et intuitive. Ce chantier a impliqué une refonte de l'architecture du site, de l'ergonomie des parcours d'achat et de la mise en avant des offres. Les résultats ont été au rendez-vous : l'efficacité commerciale du site a augmenté de manière nette, avec une progression significative des commandes en ligne et une meilleure conversion des visiteurs en clients.",
    technologies: ["Figma", "HTML", "CSS", "JavaScript"],
    role: "Chargé Marketing"
  },
  {
    id: 3, slug: "fishco", title: "FishCo", image: "FishCo.jpg",
    description: "Une application destinée aux passionnés de pêche.",
    fullDescription: "FishCo est une application mobile pensée pour les passionnés de pêche, avec une fonctionnalité centrale qui la distingue : un véritable Pokédex marin. L'idée est simple — permettre à chaque pêcheur de répertorier les poissons qu'il attrape, de les identifier, de noter les conditions de prise et de garder une trace de ses sorties. Mais au-delà du carnet de bord personnel, FishCo intègre une dimension communautaire forte : chaque capture peut être partagée avec les autres utilisateurs, créant ainsi une base de données collaborative et vivante alimentée par la communauté. Un projet né de la passion pour la mer et l'envie de connecter les pêcheurs entre eux.",
    technologies: ["React", "Express", "PostgreSQL"],
    role: "Développeur Full Stack"
  },
  {
    id: 8, slug: "tee-shirt", title: "Tee-shirt", image: "runclub.png",
    description: "Ébauches d'une future marque de tee-shirts en cours de développement.",
    fullDescription: "Derrière ce projet se cache une vraie ambition : créer ma propre marque de tee-shirts. Pour l'instant, tout est encore en cours de développement — les visuels que vous voyez ici ne sont que des ébauches, des premières explorations graphiques pour poser les bases d'un univers visuel. Chaque design est une tentative de trouver une identité forte, reconnaissable, qui pourrait un jour porter une marque à part entière. Le projet avance à son rythme, entre les lignes et les idées qui s'affinent. La suite est à venir.",
    technologies: ["Illustrator", "Photoshop"],
    role: "Designer Graphique"
  },
  {
    id: 11, slug: "affiche-diverses", title: "Affiche Diverses", image: "Morose.png",
    description: "Affiches créées pour des événements imaginaires — exercices de style pour se former au design graphique.",
    fullDescription: "Ces affiches ont été conçues dans un cadre purement formatif, sans aucun lien avec de vrais événements ou organisations. Chaque visuel est un prétexte pour explorer des univers graphiques différents — composition, typographie, traitement de l'image, ambiance. 'Morose' et 'Art Exhibition' sont deux exemples de ce travail d'exploration : des événements fictifs inventés de toutes pièces pour donner un cadre narratif aux créations. Ces exercices m'ont permis de développer ma capacité à concevoir une identité visuelle cohérente autour d'un concept, même imaginaire. Aucune de ces affiches ne correspond à un événement réel — elles sont uniquement le fruit d'un apprentissage en cours.",
    technologies: ["Photoshop", "Illustrator", "InDesign"],
    role: "Designer Graphique",
    gallery: ["Morose.png", "Art%20Exhibition.png", "OraBox.png"]
  },
  {
    id: 9, slug: "blender", title: "Blender", image: "blender.png",
    description: "Création de visuels 3D — aux débuts d'un apprentissage passionnant.",
    fullDescription: "La 3D est un univers fascinant mais redoutablement complexe, et je n'en suis qu'au début de mon apprentissage. À travers Blender, je m'initie progressivement à la modélisation, à l'éclairage, aux matériaux et au rendu. Ces premières créations sont autant d'exercices pour comprendre la logique de cet outil puissant et développer mon œil pour la composition 3D. Mon objectif à terme est de pouvoir concevoir des scènes animées en 3D — pour la mise en valeur de produits, la création de contenus visuels percutants ou des expériences immersives. Un chantier de long terme, mais une direction qui m'enthousiasme vraiment.",
    technologies: ["Blender", "Cycles"],
    role: "Designer 3D"
  },
  {
    id: 2, slug: "lippi", title: "LIPPI", image: "lippi.png",
    description: "Un site vitrine sur l'aménagement extérieur.",
    fullDescription: "Dans le cadre de mon poste chez LIPPI, j'ai piloté la refonte complète de leur site internet. L'objectif était clair : remplacer un site vieillissant par une vitrine plus performante, plus rapide et mieux optimisée pour le référencement naturel. LIPPI étant spécialisé dans l'aménagement extérieur — clôtures, portails, mobilier — le site devait avant tout inspirer les utilisateurs dans leurs projets, leur donner envie de passer à l'acte. Entièrement pensé comme un site vitrine, sans e-commerce, l'accent a été mis sur la qualité visuelle, la clarté de la navigation et la mise en valeur des gammes de produits pour guider les visiteurs vers une prise de contact.",
    technologies: ["HTML", "CSS", "JavaScript"],
    role: "Développeur Front-end"
  },
  {
    id: 5, slug: "dashboard", title: "DashBoard", image: "dashboard fb.png",
    description: "Création de plusieurs dashboard pour suivi de KPI.",
    fullDescription: "Dans le cadre de mes missions en webmarketing, j'ai conçu plusieurs dashboards sur mesure pour centraliser le pilotage et le suivi de mes campagnes publicitaires (Facebook Ads, Google Ads). Ces tableaux de bord me permettent de visualiser en temps réel les KPIs essentiels — impressions, clics, coûts, conversions — et d'identifier rapidement les leviers de performance. Au-delà du suivi des campagnes, j'ai intégré des modules d'analyse comportementale afin de tracker les parcours utilisateurs, comprendre leurs interactions et ajuster la stratégie en conséquence. Une approche data-driven qui m'a permis d'optimiser significativement le ROI des actions menées.",
    technologies: ["Google Looker Studio", "Meta Ads Manager", "Google Analytics"],
    role: "Chargé de Webmarketing",
    gallery: ["dashboard fb.png", "dashboard google.png", "dashboard.png"]
  },
  {
    id: 10, slug: "affiche-sportive", title: "Affiche Sportive", image: "Etikikz.png",
    description: "Création d'affiches sportives pour des événements locaux.",
    fullDescription: "Grand fan de sport depuis toujours, il était naturel que mes premières créations graphiques tournent autour de cet univers. Durant mes années d'études, nous avions régulièrement des cas pratiques dont l'objectif était d'apprendre à maîtriser la suite Adobe — Photoshop, Illustrator et InDesign. Ces exercices étaient pour moi l'occasion idéale de combiner ma passion pour le sport et l'apprentissage du design graphique. En travaillant sur des affiches mettant en scène des athlètes et des événements sportifs, j'ai pu développer mes réflexes de composition, de typographie et de traitement de l'image, tout en restant dans un univers qui me motive naturellement.",
    technologies: ["Illustrator", "Photoshop", "InDesign"],
    role: "Designer Graphique",
    gallery: ["Etikikz.png", "Doncic.png", "White.png"]
  },
  {
    id: 1, slug: "peace", title: "Peace", image: "PEACE.jpg",
    description: "Une application mobile sur la gestion de vie colocative.",
    fullDescription: "C'est durant ma formation accélérée en développement informatique que j'ai eu l'opportunité de réaliser ce cas pratique en équipe. Accompagné de plusieurs collaborateurs, nous avons conçu et développé Peace, une application mobile pensée pour simplifier la gestion de la vie en communauté. L'objectif était de centraliser les aspects du quotidien partagé — gestion des dépenses communes, attribution des tâches, communication entre colocataires — dans une interface simple et intuitive. Ce projet m'a permis de mettre en pratique les compétences techniques acquises pendant la formation, tout en expérimentant le travail collaboratif en mode agile : répartition des rôles, sprints, revues de code et déploiement final.",
    technologies: ["React Native", "Node.js", "MongoDB"],
    role: "Développeur Full Stack"
  },
  {
    id: 4, slug: "tahaavroom", title: "Taha'a Vroom", image: "tahaavroom.png",
    description: "Développement de maquette pour une entreprise locale.",
    fullDescription: "Taha'a Vroom est un projet personnel, réalisé uniquement pour le plaisir et l'envie de progresser en UI/UX design. J'ai imaginé une entreprise fictive de location de scooters basée à Taha'a, une île de Polynésie française, et j'ai conçu l'ensemble du site internet comme si c'était un vrai client. L'objectif était de m'exercer sur la conception d'une interface à la fois esthétique et intuitive — travail sur la hiérarchie visuelle, les parcours utilisateurs, les micro-interactions et la cohérence graphique. Ce type de projet libre est pour moi un terrain d'expérimentation idéal pour tester de nouvelles idées sans contrainte et affiner mon sens du design.",
    technologies: ["Figma", "React", "CSS"],
    role: "Designer & Développeur"
  },
  {
    id: 6, slug: "joshfit", title: "JoshFit", image: "joshfit.png",
    description: "Création de site Web pour un coach sportif",
    fullDescription: "Dans le cadre de mes études en webmarketing, nous avons eu pour mission d'accompagner un coach sportif dans le développement de sa présence digitale. Un projet concret, mené de A à Z avec mon équipe : nous avons commencé par définir une identité graphique complète — logo, palette de couleurs, typographies — afin de donner une image professionnelle et cohérente à son activité. Dans un second temps, nous avons conçu et développé son site internet, vitrine de ses offres et de son univers. L'enjeu était d'harmoniser l'ensemble de ses messages sur tous les supports digitaux pour créer une communication unifiée, crédible et engageante auprès de sa clientèle cible.",
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
