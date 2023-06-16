import styles from '@/styles/Sidebar.module.css';
import Link from 'next/link';
import { useState } from 'react';

function Sidebar() {
  const [click, setClick] = useState(false);

  const toggleClick = () => setClick(!click);

  return (
    <>
      <div className={styles["button"]} onClick={() => toggleClick()}>
        {!click ? '☰' : '✕'}
      </div>
      {
        click &&
        <>
          <div className={styles['container']}>
            <div className={styles['button']} onClick={() => toggleClick()}>
              {!click ? '☰' : '✕'}
            </div>
            <div className={styles['items']}>
              <Link href="/" className={styles.item}>Beranda</Link>
              <Link href="/profil" className={styles.item}>Profil</Link>
              <Link href="/berita" className={styles.item}>Berita</Link>
              <Link href="/kategorial" className={styles.item}>Kategorial</Link>
              <Link href="/renungan" className={styles.item}>Bahan Renungan</Link>
              <Link href="/runggun" className={styles.item}>Runggun</Link>
              <Link href="/dokumen" className={styles.item}>Dokumen</Link>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Sidebar;
