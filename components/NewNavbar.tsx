import styles from '@/styles/NewNavbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from './Sidebar';

const NewNavbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles['navbar-logo']}>
        <Image src="/logo.png" alt="logo" width={157} height={39.39} />
      </Link>
      <div className={styles.menu_container}>
        <Link href="/" className={styles.menu}>Beranda</Link>
        <Link href="/profil" className={styles.menu}>Profil</Link>
        <Link href="/berita" className={styles.menu}>Berita</Link>
        <Link href="/kategorial" className={styles.menu}>Kategorial</Link>
        <Link href="/renungan" className={styles.menu}>Bahan Renungan</Link>
        <Link href="/runggun" className={styles.menu}>Runggun</Link>
        <Link href="/dokumen" className={styles.menu}>Dokumen</Link>
        <div className={styles['sidebar']}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default NewNavbar;