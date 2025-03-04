import React from "react";
import styles from "../styles/Banner.module.css";

const tools = [
  { name: "Figma", description: "Design", icon: "/Logo/figma.png" },
  { name: "WordPress", description: "Developpement", icon: "/Logo/wordpress.png" },
  { name: "GitHub", description: "Development", icon: "/Logo/github.png" },
  { name: "Meta", description: "Visibilité", icon: "/Logo/meta.png" },
  { name: "SEO", description: "Visibilité & Optimisation", icon: "/Logo/seo.png" },
  { name: "Code", description: "Développement", icon: "/Logo/js.png" }
];

export default function Tools() {
  return (
    <div className={styles.toolsContainer}>
      <h2 className={styles.title}>Tools</h2>
      
      <div className={styles.toolsGrid}>
        {tools.map((tool, index) => (
          <div key={index} className={styles.toolItem}>
            <img src={tool.icon} alt={tool.name} className={styles.toolIcon} />
            <div className={styles.toolInfo}>
              <h3 className={styles.toolName}>{tool.name}</h3>
              <p className={styles.toolDescription}>{tool.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
