import styles from '@/styles/Sidebar.module.css';
import { dokumen, kategorial, profile, renungan } from '@/utils/MenuItems';
import Link from 'next/link';
import { useState } from 'react';

function NavItem({ title, menuItems }: any) {
  const [click, setClick] = useState(false);
  
  const toggleClick = () => setClick(!click);

  return (
    <>
      <div 
        className={styles.item}
        onClick={() => toggleClick()}
      >
        {title}▾
      </div>
      {
        click && 
        menuItems.map((item: any, index: any) => {
          return (
            <>
              <Link key={index} className={`${styles['item']} ${styles['subitem']}`} href={item.path}>
                {item.title}
              </Link>
            </>
          );
        })
      }
    </>    
  ) 
}

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
              <NavItem title="Profile" menuItems={profile} />
              <Link href="/berita" className={styles.item}>Berita</Link>
              <NavItem title="Kategorial" menuItems={kategorial} />
              <NavItem title="Bahan Renungan" menuItems={renungan} />
              <NavItem title="Dokumen" menuItems={dokumen} />
              <Link href="/runggun" className={styles.item}>Runggun</Link>
            </div>
          </div>
        </>
      }
    </>
  );
}

export default Sidebar;
