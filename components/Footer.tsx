import styles from '@/styles/Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className={styles["container"]}>
      <div className={styles["inner_container"]}>
        <div id="address" className={styles["address"]}>
          <p className={styles["header"]}>Alamat</p>
          <p>Jl. Parang IV No. 123 Komplek Asrama Pemuda Maranatha, Medan 20142</p>
        </div> 
        <div id="contact" className={styles["contact"]}>
          <div className={styles["hubungi"]}>
            <p className={styles["header"]}>Hubungi Kami</p>
            <p>0852 0749 7159 | (061) 8363653</p>
            <p>gbkpkmkjmedankutajurung@yahoo.co.id | mkj@gbkp.com</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
