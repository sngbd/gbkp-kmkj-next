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
              <Link onClick={() => toggleClick()} href="/" className={styles.item}>Beranda</Link>
              <Link onClick={() => toggleClick()} href="/profil" className={styles.item}>Profil</Link>
              <Link onClick={() => toggleClick()} href="/berita" className={styles.item}>Berita</Link>
              <Link onClick={() => toggleClick()} href="/kategorial" className={styles.item}>Kategorial</Link>
              <Link onClick={() => toggleClick()} href="/renungan" className={styles.item}>Bahan Renungan</Link>
              <Link onClick={() => toggleClick()} href="/runggun" className={styles.item}>Runggun</Link>
              <Link onClick={() => toggleClick()} href="/dokumen" className={styles.item}>Dokumen</Link>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Sidebar;
