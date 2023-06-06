import styles from '@/styles/ProfileCards.module.css';
import Image from 'next/image';

const ProfileCards = ({ profiles }: any) => {
  return (
    <div className={styles.profiles}>
      {
        profiles.map((item: any) => {
          return (
            <>
              <div key={item.nama} className={styles.profile}>
                <div className={styles.left}>
                  <Image key={item.nama} src={item.foto.url} alt="profile" width={271} height={265} />
                </div>
                <div className={styles.right}>
                  <div className={styles.nama}>{item.nama}</div>
                  <div className={styles.jabatan}>{item.jabatan ?? item.tempat_pelayanan}</div>
                  <div className={styles.phone}>
                    <Image key={item.nama} src='/wa.svg' alt='wa' width={21} height={21} /> {item.whatsapp}
                  </div>
                  {
                    item.email &&
                    <div className={styles.phone}>
                      <Image key={item.nama} src='/email.svg' alt='email' width={21} height={21} /> {item.email}
                    </div>
                  }
                </div>
              </div>
            </>
          )
        })
      }
    </div>
  );
}

export default ProfileCards;
