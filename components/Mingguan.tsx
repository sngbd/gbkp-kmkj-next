import styles from '@/styles/Mingguan.module.css';
import heroStyles from '@/styles/Hero.module.css';
import Link from 'next/link';
import { RefObject, forwardRef } from 'react';

const Mingguan = forwardRef(({ className, renungan }: any, ref) => {
  return (
  <>
    <div ref={ref as RefObject<HTMLDivElement> || null} className={`${styles.container} ${className}`}>
      <div className={heroStyles["custom-shape-divider-top-1679582241"]}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={heroStyles["shape-fill"]}></path>
          </svg>
      </div>
      <div className={styles.left}>
        <h1 className={styles.title}>Bahan Renungan</h1>
        <p className={styles.info}>{renungan[0].data.description}</p>
        <Link href="/renungan" className={styles.button}>Lihat Bahan Renungan</Link>
      </div>
      <div className={styles.verses}>
        <div className={styles.verse}>
          <div className={styles.content}>
            <div className={styles.text}>
              {renungan[0].data.renungan[0].isi}
            </div>
            <div className={styles.bible_verse}>
              {renungan[0].data.renungan[0].ayat}
            </div>
          </div>
        </div>
        <div className={`${styles.verse} ${styles.verse2}`}>
          <div className={styles.content}>
            <div className={styles.text}>
              {renungan[0].data.renungan[1].isi}
            </div>
            <div className={styles.bible_verse}>
              {renungan[0].data.renungan[1].ayat}
            </div>
          </div>
        </div>
        <div className={`${styles.verse} ${styles.verse3}`}>
          <div className={styles.content}>
            <div className={styles.text}>
              {renungan[0].data.renungan[2].isi}
            </div>
            <div className={styles.bible_verse}>
              {renungan[0].data.renungan[2].ayat}
            </div>
          </div>
        </div>
      </div>
      <div className={heroStyles["custom-shape-divider-bottom-1679582064"]}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={heroStyles["shape-fill"]}></path>
        </svg>
      </div>
    </div>
  </>
  );
})

Mingguan.displayName = 'Mingguan'

export default Mingguan;