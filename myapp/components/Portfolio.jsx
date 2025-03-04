import React from "react";
import styles from '../styles/Portfolio.module.css'; // Importation du fichier CSS Module

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h2>Projets</h2>
        <a href="/projects" className={styles.seeAll}>Voir tout les projets</a>
      </div>
      <div className={styles.grid}>
        <div className={styles.project}>
          <img src="PEACE.jpg" alt="PEACE" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>PEACE</h3>
          <p className={styles.projectCategory}>Application Mobile de gestion de vie en communauté</p>
        </div>
        <div className={styles.project}>
          <img src="lippiMockup.jpg" alt="Serenity" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>LIPPI</h3>
          <p className={styles.projectCategory}>Refonte du site internet vitrine pour de l'aménagement extérieur</p>
        </div>
        <div className={styles.project}>
          <img src="FishCo.jpg" alt="Another Project" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>FishCo</h3>
          <p className={styles.projectCategory}>Application mobile destinée aux pêcheurs</p>
        </div>
      </div>
    </div>
  );
}
