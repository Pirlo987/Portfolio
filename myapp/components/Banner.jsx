import React from "react";
import styles from "../styles/Banner.module.css";

const skills = [
  { name: "JavaScript (React, React Native, Vanilla)", icon: "/Logo/js.png" },
  { name: "HTML ", icon: "/Logo/html.png" },
  { name: "CSS", icon: "/Logo/css.png" },
  { name: "WordPress", icon: "/Logo/wordpress.png" },
  { name: "Figma", icon: "/Logo/figma.png" },
  { name: " Meta Ads", icon: "/Logo/meta.png" },
  { name: "Google Ads", icon: "/Logo/googleads.png" },
  { name: "SEO", icon: "/Logo/seo.png" },
  { name: "IA Prompt", icon: "/Logo/IA.png" }
];

export default function Banner() {
  return (
    <div className={styles.bannerContainer}>
      <h2 className={styles.talentName}>Ma Stack et Compléments</h2>
      
      <div className={styles.marquee}>
        <div className={styles.marqueeContent}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillItem}>
              <img src={skill.icon} alt={skill.name} className={styles.skillIcon} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
