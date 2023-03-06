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
      <div className={styles["profile-card"]}>
        <div className={styles["profile-picture"]}>
          <Image src={foto.url} alt="Profile picture" width={150} height={150} />
        </div>
        <div className={styles["profile-info"]}>
              <h2>{nama}</h2>
              {
                jabatan && (
                  <p>{jabatan}</p>
                )
              }
              <p>
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
      {/* <div className={styles["profile-card-container"]}>
        <Image className={styles["profile-img"]} src={foto.url} alt="pic" width={100} height={100} />
        <div className={styles["text-container"]}>
          <h2 className={styles["title-text"]}>{nama}</h2>
          {
            jabatan && (
              <p className={styles["title"]}>{jabatan}</p>
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
            {
              email && (
                <>
                  <FontAwesomeIcon icon={faEnvelope} /> {email} <br />
                </>
              )
            }
          </p>
        </div> */
      /* </div> */}
    </>
  );
}

export default Profile
