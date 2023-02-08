import styles from '@/styles/Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faHouse,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { 
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className={styles['footer-container']} id="hubungi">
      <div className={styles['footer-links']}>
        <div className={styles['footer-link-wrapper']}>
          <div className={styles['footer-link-items']}>
            <h2><FontAwesomeIcon icon={faHouse} /></h2>
            <h2>Alamat </h2>
            <p>Jalan Jamin Ginting</p>
          </div>
          <div className={styles['footer-link-items']}>
            <h2><FontAwesomeIcon icon={faPhone} /></h2>
            <h2>Hubungi Kami</h2>
            <p>(061) 88369578</p>
          </div>
        </div>
        <div className={styles['footer-link-wrapper']}>
          <div className={styles['footer-link-items']}>
            <h2><FontAwesomeIcon icon={faEnvelope} /></h2>
            <h2>Email</h2>
            <p>info@gbkpkm8.or.id</p>
          </div>
        </div>
      </div>
      <section className={styles['social-media']}>
        <div className={styles['social-media-wrap']}>
          <div className={styles['footer-logo']}>
            <Link href='/' className={styles['social-logo']}>
              GBKP KMKJ
            </Link>
          </div>
          <small className={styles['website-rights']}>GBKP KMKJ © 2022</small>
          <div className={styles['social-icons']}>
            <Link
              className={styles['social-icon-link']}
              href='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className={styles['social-icon-link']}
              href='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className={styles['social-icon-link']}
              href='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
            <Link
              className={styles['social-icon-link']}
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link
              className={styles['social-icon-link']}
              href='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
