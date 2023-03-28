import styles from '@/styles/Personalia.module.css';
import ProfileCards from './ProfileCards';

const Personalia = ({ bpmk }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>BPMK Kutajurung</h1>
        <p className={styles.desc}>Badan Pekerja Majelis Klasis</p>
      </div>
      <ProfileCards profiles={bpmk} />
    </div>
  );
}

export default Personalia;