import styles from '@/styles/Hero.module.css';
import Link from 'next/link';

const Hero = ({ title, left, leftLink = "#contact", right, rightLink = "#address", bg }: any) => {
  return (
    <>
      <div className={styles.container} style={bg ? { backgroundImage: `linear-gradient(75.33deg, rgba(0, 0, 0, 0.5) -10.41%, rgba(0, 0, 0, 0) 62.93%), url(${bg})` } : {}}>
        <div className={styles.inner}>
          <div className={styles.title}>{title}</div>
          <div className={styles.buttons}>
            <Link href={leftLink} className={styles.left}>{left}</Link>
            <Link href={rightLink} className={styles.right}>{right}</Link>
          </div>
        </div>
        <div className={styles["custom-shape-divider-bottom-1679582064"]}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default Hero;