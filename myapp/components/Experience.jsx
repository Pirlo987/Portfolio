import React from "react";
import styles from "../styles/Experience.module.css";

const experiences = [
    {
      date: "October 2024 – Janvier 2025",
      company: "La Capsule",
      role: "Developpeur Mobile",
      description:
      "Développement d'une application mobile de gestion de colocation intégrant des fonctionnalités de gestion des dépenses, des tâches entre colocataires. Conception et implémentation de l'interface utilisateur, optimisation des performances et déploiement de l'application."  },

  {
    date: "Octobre 2022 – Octobre 2024",
    company: "LIPPI",
    role: "Chargé de Webmarketing",
    description:
    "Développement et mise en œuvre de la stratégie digitale de LIPPI, incluant la gestion des campagnes publicitaires en ligne, l’optimisation du référencement (SEO/SEA), l’animation des réseaux sociaux et l’analyse des performances web afin d’améliorer la visibilité et la conversion."  },
    {
    date: "Mars 2023 – Aout 2023",
    company: "HackSchooling",
    role: "Responsable Marketing",
    description:
    "Création de supports visuels (affiches, flyers, PLV) pour renforcer la communication et l’attractivité du magasin. Gestion opérationnelle du point de vente, incluant l’organisation des stocks, la prise de réservations et l’optimisation de l’expérience client."  },
];

export default function Experience() {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Experience</h2>
        <a href="/Brieuc Vannier CV .pdf" download="/Brieuc Vannier CV.pdf" className={styles.downloadButton}>
          Télécharger CV
        </a>
      </div>

      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className={styles.date}>{exp.date}</div>
            <div className={styles.details}>
              <h3 className={styles.company}>{exp.company}</h3>
              <p className={styles.role}>{exp.role}</p>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
