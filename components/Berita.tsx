import styles from '@/styles/Berita.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Berita = ({ berita }: any) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Berita Mingguan</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas</p>
      </div>
      <div className={styles.cards}>
      {
        berita.map((item: any) => {
          return (
          <>
            <div className={styles.card}>
              <div>
                <Image className={styles.cardImage} src={item.data['berita'].filter((el: any) => el.type === 'image')[0]?.url || '/blank.jpg'} alt={item.title} width={356} height={254} />
              </div>
              <div className={styles.text}>
                <p className={styles.headline}>{item.data.judul}</p>
                <Link href={`/berita/${item.uid}`} className={styles.button}>Lanjut Baca</Link>
              </div>
            </div>
          </>
          )
        })
      }
      </div>
      <Link href="/berita" className={styles.more}>
        Lihat Semua Berita 
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6895 7.24997H0.75C0.551088 7.24997 0.360322 7.32899 0.21967 7.46964C0.0790178 7.61029 0 7.80106 0 7.99997C0 8.19888 0.0790178 8.38965 0.21967 8.5303C0.360322 8.67095 0.551088 8.74997 0.75 8.74997H14.6895L9.219 14.219C9.07817 14.3598 8.99905 14.5508 8.99905 14.75C8.99905 14.9491 9.07817 15.1401 9.219 15.281C9.35983 15.4218 9.55084 15.5009 9.75 15.5009C9.94916 15.5009 10.1402 15.4218 10.281 15.281L17.031 8.53097C17.1008 8.4613 17.1563 8.37854 17.1941 8.28742C17.2319 8.1963 17.2513 8.09862 17.2513 7.99997C17.2513 7.90132 17.2319 7.80364 17.1941 7.71252C17.1563 7.6214 17.1008 7.53864 17.031 7.46897L10.281 0.718971C10.1402 0.578141 9.94916 0.499023 9.75 0.499023C9.55084 0.499023 9.35983 0.578141 9.219 0.718971C9.07817 0.859801 8.99905 1.05081 8.99905 1.24997C8.99905 1.44913 9.07817 1.64014 9.219 1.78097L14.6895 7.24997Z" fill="#7D7D7D"/>
        </svg>
      </Link>
    </div>
  );
}

export default Berita;