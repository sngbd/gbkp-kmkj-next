import styles from '@/styles/NewNavbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { kategorial, renungan, dokumen, profile } from '../utils/MenuItems';
import Dropdown from './Dropdown';
import Sidebar from './Sidebar';

function NavItem({ title, menuItems }: any) {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(true);
  
  const toggleClick = () => setClick(!click);

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    showMobile();
  });


  return (
    <>
      <div 
        className={styles.menu}
        onClick={() => toggleClick()}
      >
        {title}
        {!mobile && click && <Dropdown MenuItems={menuItems}/>}
      </div>
    </>    
  ) 
}

const NewNavbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles['navbar-logo']}>
        <Image src="/logo.png" alt="logo" width={198} height={48.8} />
      </Link>
      <Link href="/" className={styles.menu}>Beranda</Link>
      <NavItem title="Profile" menuItems={profile} />
      <Link href="/berita" className={styles.menu}>Berita</Link>
      <NavItem title="Kategorial" menuItems={kategorial} />
      <NavItem title="Bahan Renungan" menuItems={renungan} />
      <NavItem title="Dokumen" menuItems={dokumen} />
      <Link href="/runggun" className={styles.menu}>Runggun</Link>
      <div className={styles['sidebar']}>
        <Sidebar />
      </div>
    </div>
  );
}

export default NewNavbar;