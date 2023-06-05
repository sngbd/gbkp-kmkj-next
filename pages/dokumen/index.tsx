import { createClient } from '@/prismicio';
import styles from '@/styles/Dokumen.module.css'
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

function Dokumen({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Dokumen GBKP Klasis Medan Kutajurung</div>
        <div className={styles['desc']}>{results[0].data.description}</div>
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient();
  
  const { results } = await client.getByType('dokumen_desc');

  return {
    props: { results },
  }
}

export default Dokumen;
