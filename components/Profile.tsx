import styles from '@/styles/ProfileCard.module.css';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChurch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const Profile = ({ profile }: any) => {
  const { foto, nama, jabatan, tempat_pelayanan, whatsapp, email } = profile;

  if (!foto.url) foto.url = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"

  return (
    <>
      <div className={styles["profile-card-container"]}>
        <div className={styles["circle"]}></div>
        <Image className={styles["profile-img"]} src={foto.url} alt="pic" width={100} height={100} />
        <div className={styles["text-container"]}>
          <p className={styles["title-text"]}>{nama}</p>
          {
            jabatan && (
              <p className={styles["info-text"]}>{jabatan}</p>
            )
          }
          <p className={styles["desc-text"]}>
            {
              tempat_pelayanan && (
                <>
                  <FontAwesomeIcon icon={faChurch} /> {tempat_pelayanan} <br />
                </>
              )
            }
            {
              whatsapp && (
                <>
                  <FontAwesomeIcon icon={faWhatsapp} /> {whatsapp} <br />
                </>
              )
            }
            <br />
            {
              email && (
                <>
                  <FontAwesomeIcon icon={faEnvelope} /> {email} <br />
                </>
              )
            }
          </p>
        </div>
      </div>
    </>
  );
}

export default Profile
