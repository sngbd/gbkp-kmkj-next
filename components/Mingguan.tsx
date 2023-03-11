import styles from '@/styles/Mingguan.module.css';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Bahan Renungan Mingguan</h1>
        <p className={styles.info}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. </p>
        <Link href="/harian" className={styles.button}>Lihat Bahan Renungan</Link>
      </div>
      <div className={styles.verses}>
        <div className={styles.verse}>
          <div className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias reprehenderit est libero! Tenetur, error aliquam. Dolorem, quisquam obcaecati? Soluta, deleniti!
          </div>
          <div className={styles.bible_verse}>
            Yeremia 1:4
          </div>
        </div>
        <div className={`${styles.verse} ${styles.verse2}`}>
          <div className={styles.text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui dicta deleniti ducimus, molestiae accusamus facilis numquam pariatur doloremque minima dolores.
          </div>
          <div className={styles.bible_verse}>
            Matius 3:5
          </div>
        </div>
        <div className={`${styles.verse} ${styles.verse3}`}>
          <div className={styles.text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores nemo magnam eius libero alias quos animi neque perspiciatis consequuntur optio?
          </div>
          <div className={styles.bible_verse}>
            Keluaran 3:5
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;