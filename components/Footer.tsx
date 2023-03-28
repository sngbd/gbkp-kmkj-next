import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div className={styles["address"]}>
          <p className={styles["header"]}>Alamat</p>
          <p>Jalan Jamin Ginting</p>
        </div> 
        <div className={styles["contact"]}>
          <div className={styles["hubungi"]}>
            <p className={styles["header"]}>Hubungi Kami</p>
            <p>(061) 88369578</p>
            <p>info@dbkpkm8.or.id</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
