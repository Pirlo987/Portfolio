import React from "react";
import styles from "../styles/Services.module.css";

const services = [
  ["Création Web", "Developpement"],
  ["UI/UX", "Design"],
  ["Mise en Place de campagne Ads", "Stratégie Marketing"],
];

export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.servicesTitle}>Services</h2>
      <div className={styles.servicesGrid}>
        {services.map((pair, index) => (
          <div key={index} className={styles.serviceRow}>
            <div className={styles.serviceItem}>{pair[0]}</div>
            <div className={styles.serviceItem}>{pair[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
