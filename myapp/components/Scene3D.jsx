import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, Html, Environment, Cylinder } from '@react-three/drei';
import styles from '../styles/Scene3D.module.css';

const badges = [
  { id: 1, icon: '❤️', label: '2.4k', top: '18%', left: '72%', delay: '0s' },
  { id: 2, icon: '💬', label: '142',  top: '38%', left: '76%', delay: '0.6s' },
  { id: 3, icon: '👁️', label: '18k',  top: '60%', left: '70%', delay: '1.2s' },
  { id: 4, icon: '🔔', label: '+12',  top: '22%', left: '10%', delay: '0.3s' },
  { id: 5, icon: '↗️', label: '864',  top: '50%', left: '6%',  delay: '0.9s' },
];

/* Matériau titane iPhone 16 */
const titaniumProps = { color: '#b0b0b5', roughness: 0.25, metalness: 0.92 };

function Lens({ position }) {
  return (
    <group position={position}>
      {/* Bague externe */}
      <mesh>
        <cylinderGeometry args={[0.19, 0.19, 0.04, 32]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.2} metalness={0.9} />
      </mesh>
      {/* Verre de l'objectif */}
      <mesh position={[0, 0.025, 0]}>
        <cylinderGeometry args={[0.14, 0.14, 0.01, 32]} />
        <meshStandardMaterial color="#0a0a1a" roughness={0.05} metalness={0.1} />
      </mesh>
      {/* Reflet interne */}
      <mesh position={[0, 0.03, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.005, 32]} />
        <meshStandardMaterial color="#3a4a8a" roughness={0} metalness={0.2} emissive="#2244aa" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function PhoneBody() {
  const group = useRef();

  useFrame((state) => {
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.22;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.06;
  });

  return (
    <group ref={group}>

      {/* ── CORPS principal – titane flat-edge iPhone 16 ── */}
      <RoundedBox args={[2.1, 4.3, 0.2]} radius={0.28} smoothness={8}>
        <meshStandardMaterial {...titaniumProps} />
      </RoundedBox>

      {/* ── ÉCRAN (face avant) ── */}
      <RoundedBox args={[1.86, 4.06, 0.02]} radius={0.22} smoothness={6} position={[0, 0, 0.105]}>
        <meshStandardMaterial color="#050508" roughness={0.04} metalness={0.05} />
      </RoundedBox>

      {/* ── CONTENU ÉCRAN ── */}
      <Html position={[0, 0, 0.13]} center style={{ width: '160px', pointerEvents: 'none', userSelect: 'none' }}>
        <div className={styles.screen}>
          {/* Status bar */}
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>▲ ◼ ▐</span>
          </div>

          {/* Dynamic Island */}
          <div className={styles.dynamicIsland} />

          {/* Post header */}
          <div className={styles.screenHeader}>
            <img src="/photoCV.jpg" className={styles.screenAvatar} alt="avatar" />
            <div className={styles.headerInfo}>
              <span className={styles.screenName}>brieuc.v</span>
              <span className={styles.screenSub}>Suivre</span>
            </div>
            <span className={styles.screenMore}>•••</span>
          </div>

          {/* Image du post */}
          <div className={styles.screenImage}>
            <img src="/photoCV.jpg" className={styles.screenImageInner} alt="post" />
          </div>

          {/* Actions */}
          <div className={styles.screenActions}>
            <div className={styles.actionsLeft}>
              <span className={styles.actionIcon}>♡</span>
              <span className={styles.actionIcon}>💬</span>
              <span className={styles.actionIcon}>↗</span>
            </div>
            <span className={styles.actionSave}>🔖</span>
          </div>

          <div className={styles.screenLikes}>2 418 j'aime</div>
          <div className={styles.screenCaption}><b>brieuc.v</b> Web · Design · Marketing ✦</div>
        </div>
      </Html>

      {/* ── DYNAMIC ISLAND (3D pill) ── */}
      <RoundedBox args={[0.48, 0.13, 0.015]} radius={0.065} smoothness={6} position={[0, 1.88, 0.12]}>
        <meshStandardMaterial color="#080808" roughness={0.1} metalness={0.1} />
      </RoundedBox>

      {/* ── DOS (légèrement différent) ── */}
      <RoundedBox args={[1.86, 4.06, 0.005]} radius={0.22} smoothness={6} position={[0, 0, -0.105]}>
        <meshStandardMaterial color="#1c1c1e" roughness={0.15} metalness={0.5} />
      </RoundedBox>

      {/* ── BOSSE CAMÉRA ── */}
      <RoundedBox args={[0.92, 0.92, 0.1]} radius={0.18} smoothness={6} position={[-0.38, 1.28, -0.15]}>
        <meshStandardMaterial color="#161618" roughness={0.2} metalness={0.8} />
      </RoundedBox>

      {/* ── OBJECTIFS ── (rotation 90° autour de X pour les cylindres verticaux) */}
      <group rotation={[Math.PI / 2, 0, 0]}>
        <Lens position={[-0.22, 0.14, -1.28]} />
        <Lens position={[-0.54, 0.14, -1.28]} />
      </group>

      {/* Flash */}
      <mesh position={[-0.54, 1.54, -0.16]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.06, 0.02, 16]} />
        <meshStandardMaterial color="#fffde7" roughness={0.1} metalness={0.3} emissive="#fffde7" emissiveIntensity={0.2} />
      </mesh>

      {/* ── BOUTON POWER (droite) ── */}
      <RoundedBox args={[0.06, 0.38, 0.1]} radius={0.03} position={[1.09, 0.3, 0]}>
        <meshStandardMaterial {...titaniumProps} />
      </RoundedBox>

      {/* ── ACTION BUTTON (gauche haut) ── */}
      <RoundedBox args={[0.06, 0.22, 0.1]} radius={0.03} position={[-1.09, 1.1, 0]}>
        <meshStandardMaterial color="#c8a882" roughness={0.3} metalness={0.8} />
      </RoundedBox>

      {/* ── VOLUME (gauche) ── */}
      <RoundedBox args={[0.06, 0.3, 0.1]} radius={0.03} position={[-1.09, 0.55, 0]}>
        <meshStandardMaterial {...titaniumProps} />
      </RoundedBox>
      <RoundedBox args={[0.06, 0.3, 0.1]} radius={0.03} position={[-1.09, 0.1, 0]}>
        <meshStandardMaterial {...titaniumProps} />
      </RoundedBox>

      {/* ── PORT USB-C (bas) ── */}
      <RoundedBox args={[0.32, 0.07, 0.12]} radius={0.03} position={[0, -2.17, 0]}>
        <meshStandardMaterial color="#0a0a0a" roughness={0.5} metalness={0.5} />
      </RoundedBox>

    </group>
  );
}

export default function Scene3D() {
  return (
    <div className={styles.wrapper}>
      {badges.map((b) => (
        <div
          key={b.id}
          className={styles.badge}
          style={{ top: b.top, left: b.left, animationDelay: b.delay }}
        >
          <span className={styles.badgeIcon}>{b.icon}</span>
          <span className={styles.badgeLabel}>{b.label}</span>
        </div>
      ))}

      <Canvas camera={{ position: [0, 0, 8], fov: 40 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.6} />
        <directionalLight position={[-4, -2, -4]} intensity={0.25} color="#F9655B" />
        <pointLight position={[0, 4, 3]} intensity={0.5} color="#ffffff" />
        <Float speed={1.2} floatIntensity={0.5} rotationIntensity={0}>
          <PhoneBody />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
