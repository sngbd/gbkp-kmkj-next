import Link from 'next/link';
import styles from '@/styles/BahanPA.module.css';
import Page from './Page';

const Renungan = ({ judul, path, bahanRenungan }: any) => {
  const content = (
    <div className={styles["list-pa"]}>
      {
        bahanRenungan.map((j: any) => {
          return (
            <>
              <div className={styles["item"]}>
                <Link href={`${path}/${j.uid}`}>
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
      <Page title={judul} content={content} />
    </>
  );
}

export default Renungan;
