import styles from '@/styles/Dokumen.module.css'
import Link from 'next/link';

function Dokumen() {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Dokumen GBKP Klasis Medan Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas</div>
        <div className={styles['buttons']}>
          <Link href="/dokumen/roster-kotbah-3" className={styles.button}>
            Roster Khotbah Minggu Ketiga
          </Link>
          <Link href="/dokumen/musyawarah-ngawan" className={styles.button}>
            Musyawarah Ngawan
          </Link>
          <Link href="/dokumen/risalah-sidang-klasis" className={styles.button}>
            Risalah Sidang Klasis
          </Link>
          <Link href="/dokumen/laporan-keuangan" className={styles.button}>
            Laporan Keuangan
          </Link>
        </div>
      </div>
    </>
  );
}

export default Dokumen;
