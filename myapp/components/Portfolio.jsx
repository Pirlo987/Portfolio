import React from "react";
import styles from '../styles/Portfolio.module.css'; // Importation du fichier CSS Module

export default function Portfolio() {
  return (
    <div className={styles.portfolioContainer}>
      <div className={styles.header}>
        <h2>Projets</h2>
        <a href="#" className={styles.seeAll}>Voir tout les projets</a>
      </div>
      <div className={styles.grid}>
        <div className={styles.project}>
          <img src="Solitary Kayak Fishing.jpeg" alt="Evoke" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Evoke</h3>
          <p className={styles.projectCategory}>Brand identity, Packaging</p>
        </div>
        <div className={styles.project}>
          <img src="Solitary Kayak Fishing.jpeg" alt="Serenity" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Serenity</h3>
          <p className={styles.projectCategory}>Website, Print</p>
        </div>
        <div className={styles.project}>
          <img src="Solitary Kayak Fishing.jpeg" alt="Another Project" className={styles.projectImage} />
          <h3 className={styles.projectTitle}>Another Project</h3>
          <p className={styles.projectCategory}>Category</p>
        </div>
      </div>
    </div>
  );
}
