import styles from '@/styles/Personalia.module.css';
import ProfileCards from './ProfileCards';
import { RefObject, forwardRef } from 'react';

const Personalia = forwardRef(({ className, bpmk }: any, ref) => {
  return (
    <div ref={ref as RefObject<HTMLDivElement> || null} className={`${styles.container} ${className}`}>
      <div className={styles.header}>
        <h1 className={styles.title}>BPMK Kutajurung</h1>
        <p className={styles.desc}>Badan Pekerja Majelis Klasis</p>
      </div>
      <ProfileCards profiles={bpmk} />
    </div>
  );
})

Personalia.displayName = 'Personalia'

export default Personalia;