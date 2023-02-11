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

function NavItem({ item, path, menuItem, closeMobileMenu }: any) {
  const [hover, setHover] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mobile, setMobile] = useState(true);
  
  const toggleDropDown = () => setDropDown(!dropDown);

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
      <li 
        className={styles['nav-item']}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={toggleDropDown}
      >
        <Link href={path} className={styles['nav-links']} onClick={!menuItem && closeMobileMenu}>
          {item} {menuItem && <FontAwesomeIcon icon={faCaretDown} />}
        </Link>
        {!mobile && hover && menuItem && <Dropdown MenuItems={menuItem} />}
      </li>
      {
        mobile && dropDown &&
        menuItem && menuItem.map((item: any, index: any) => {
          return (
            <li 
              key={index}
              className={styles['nav-dropdown']}>
              <Link className={styles['nav-links']} href={item.path} onClick={closeMobileMenu}>
                {item.title}
              </Link>
            </li>
          );
        })
      }
    </>    
  )
}

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
            <NavItem item="Profil" path="#" menuItem={profile} closeMobileMenu={closeMobileMenu} />
            <NavItem item="Berita" path="/berita" closeMobileMenu={closeMobileMenu} />
            <NavItem item="Kategorial" path="#" menuItem={kategorial} closeMobileMenu={closeMobileMenu} />
            <NavItem item="Bahan Renungan" path="#" menuItem={renungan} closeMobileMenu={closeMobileMenu} />
            <NavItem item="Runggun" path="/runggun" closeMobileMenu={closeMobileMenu} />
            <NavItem item="Dokumen" path="#" menuItem={dokumen} closeMobileMenu={closeMobileMenu} />
            <li>
              <Link href='#hubungi' className={styles['nav-links-mobile']} onClick={closeMobileMenu}>
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
