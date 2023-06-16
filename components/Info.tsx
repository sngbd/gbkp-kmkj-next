import styles from '@/styles/Info.module.css';

const Info = ({ results }: any) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.infos}>
        {
          results.map((result: any) => (
            <div key={result.title} className={styles.statistic}>
              <div className={styles.title}>{result.title}</div>
              <div className={styles.number}>{result.number}</div>
            </div>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default Info;
