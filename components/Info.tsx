import styles from '@/styles/Info.module.css';
import { RefObject, forwardRef } from 'react';

const Info = forwardRef(({ className, results }: any, ref) => {
  return (
    <>
    <div ref={ref as RefObject<HTMLDivElement> | null} className={`${styles.container} ${className}`}>
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
})

Info.displayName = "Info"

export default Info;
