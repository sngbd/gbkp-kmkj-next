import styles from '@/styles/Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["inner_container"]}>
          <div id="address" className={styles["address"]}>
            <p className={styles["header"]}>Alamat</p>
            <p>Jl. Parang IV No. 123</p>
            <p>Komplek Asrama Pemuda Maranatha</p>
            <p>Medan 20142</p>
          </div> 
          <div id="contact" className={styles["contact"]}>
            <p className={styles["header"]}>Hubungi Kami</p>
            <p>0852 0749 7159</p>
            <p>(061) 8363653</p>
            <p>mkj@gbkp.com</p>
            <p>gbkpkmkjmedankutajurung@yahoo.co.id</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
