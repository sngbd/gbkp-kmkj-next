import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import styles from '@/styles/Navbar.module.css';
import { profile, kategorial, renungan, dokumen } from '../utils/MenuItems';
import Dropdown from './Dropdown';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faTimes,
  faBars,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons'

function NavItem({ item, path, menuItem }: any) {
  const [hover, setHover] = useState(false);

  return (
    <>
      <li 
        className={styles['nav-item']}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Link href={path} className={styles['nav-links']}>
          {item} {menuItem && <FontAwesomeIcon icon={faCaretDown} />}
        </Link>
        {hover && menuItem && <Dropdown MenuItems={menuItem} />}
      </li>
    </>    
  )
}

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className={styles['navbar']}>
        <div className={styles['navbar-container']}>
          <Link href='/' className={styles['navbar-logo']} onClick={closeMobileMenu}>
            GBKP Klasis Medan Kutajurung
          </Link>
          <div className={styles['menu-icon']} onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? `${styles['nav-menu']} ${styles['active']}` : styles['nav-menu']}>
            <NavItem item="Profil" path="#" menuItem={profile} />
            <NavItem item="Berita" path="/berita" />
            <NavItem item="Kategorial" path="#" menuItem={kategorial} />
            <NavItem item="Bahan Renungan" path="#" menuItem={renungan} />
            <NavItem item="Runggun" path="/runggun" />
            <NavItem item="Dokumen" path="#" menuItem={dokumen} />
            <li>
              <Link href='#hubungi' className={styles['nav-links-mobile']} onClick={closeMobileMenu}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
          {
            button && 
            <Button buttonStyle='btn--outline' linkTo='#hubungi'>
              Hubungi Kami
            </Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
