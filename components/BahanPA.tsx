import styles from '@/styles/BahanPA.module.css';
import Link from 'next/link';
import Page from './Page';

const BahanPA = ({ judul, bahanPa }: any) => {
  const kategorial = judul.toLowerCase().split('.').join('');

  const content = (
    <div className={styles["list-pa"]}>
      {
        bahanPa.map((j: any) => {
          return (
            <>
              <div className={styles["item"]}>
                <Link href={`/${kategorial}/bahan-pa/${j.uid}`}>
                  {j.data.judul}
                </Link>
              </div>
            </>
          )
        })
      }
    </div>
  )

  return (
    <>
      <Page title={`Bahan PA ${judul}`} content={content} />
    </>
  );
}

export default BahanPA;
