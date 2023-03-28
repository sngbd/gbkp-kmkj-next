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
              <Link href="/berita" className={styles.item}>Berita</Link>
              <Link href="/kategorial" className={styles.item}>Berita</Link>
              <Link href="/runggun" className={styles.item}>Runggun</Link>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Sidebar;
