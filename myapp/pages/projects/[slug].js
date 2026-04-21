import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { projects } from '../../components/Projects';
import styles from '../../styles/ProjectDetail.module.css';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const touchStartX = useRef(null);

  const project = projects.find((p) => p.slug === slug);
  const gallery = project?.gallery ?? [];

  const prev = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  const next = (e) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i + 1) % gallery.length);
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? setLightboxIndex((i) => (i + 1) % gallery.length) : setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
    touchStartX.current = null;
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % gallery.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + gallery.length) % gallery.length);
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, gallery.length]);

  if (!project) {
    return (
      <Layout>
        <div className={styles.notFound}>
          <p>Projet introuvable.</p>
          <Link href="/projects"><span className={styles.back}>← Retour aux projets</span></Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className={styles.container}>
        <Link href="/projects"><span className={styles.back}>← Retour aux projets</span></Link>

        {project.gallery ? (
          <div className={styles.gallery}>
            {project.gallery.map((img, i) => (
              <div key={i} className={styles.galleryItem} onClick={() => setLightboxIndex(i)}>
                <img src={`/${img}`} alt={`${project.title} ${i + 1}`} className={styles.galleryImage} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.hero}>
            <img src={`/${project.image}`} alt={project.title} className={styles.heroImage} />
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>{project.title}</h1>
            <span className={styles.role}>{project.role}</span>
          </div>

          <p className={styles.description}>{project.fullDescription}</p>

          <div className={styles.techSection}>
            <h3 className={styles.techTitle}>Technologies</h3>
            <div className={styles.techList}>
              {project.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`} onClick={prev}>&#8249;</button>
          <img src={`/${gallery[lightboxIndex]}`} alt="fullscreen" className={styles.lightboxImage} />
          <button className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`} onClick={next}>&#8250;</button>
          <div className={styles.lightboxDots}>
            {gallery.map((_, i) => (
              <span key={i} className={`${styles.dot} ${i === lightboxIndex ? styles.dotActive : ''}`} />
            ))}
          </div>
        </div>
      )}
    </Layout>
  );
}
