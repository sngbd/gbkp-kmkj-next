import styles from '@/styles/Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>GBKP Klasis Medan Kutajurung</h1>
        <p className={styles.info}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti tenetur molestias labore explicabo. Officiis, tempore.</p>
        <Link href="/sejarah" className={styles.button}>Lanjut Baca</Link>
      </div>
      <div className='right'>
        <Image
          className={styles.image}
          src={"/gbkp-kmkj.jpeg"}
          alt="kantor"
          width='574'
          height='493'
       />
      </div>
    </div>
  );
}

export default Hero;