import styles from '@/styles/Personalia.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Personalia = ({ personalia }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Personalia</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas</p>
      </div>
      <div className={styles.profiles}>
        {
          personalia.slice(0, 3).map((item: any) => {
            return (
              <>
                <div className={styles.profile}>
                  <div className={styles.image}>
                    <Image src={item.foto.url} alt="profile" width={271} height={265} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.text}>
                      <p className={styles.name}>{item.nama}</p>
                      <p className="church">{item.tempat_pelayanan}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <div className={styles.profiles2}>
        {
          personalia.slice(3, 6).map((item: any) => {
            return (
              <>
                <div className={styles.profile}>
                  <div className={styles.image}>
                    <Image src={item.foto.url} alt="profile" width={271} height={265} />
                  </div>
                  <div className={styles.info}>
                    <div className={styles.text}>
                      <p className={styles.name}>{item.nama}</p>
                      <p className="church">{item.tempat_pelayanan}</p>
                    </div>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
      <Link href="/personalia" className={styles.button}>
        <p>Lihat Semua Personalia</p>
      </Link>
    </div>
  );
}

export default Personalia;