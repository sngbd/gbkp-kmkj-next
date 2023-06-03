import styles from '@/styles/Info.module.css';

const Info = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.infos}>
        <div className={styles.statistic}>
          <div className={styles.title}>Runggun</div>
          <div className={styles.number}>20</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Perp</div>
          <div className={styles.number}>20</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>PJJ</div>
          <div className={styles.number}>116</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Rumah Tangga</div>
          <div className={styles.number}>3647</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Anggota</div>
          <div className={styles.number}>11847</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Personalia</div>
          <div className={styles.number}>26</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Pertua - Diaken</div>
          <div className={styles.number}>503</div>
        </div>
        <div className={styles.statistic}>
          <div className={styles.title}>Tempat Kebaktian</div>
          <div className={styles.number}>29</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Info;