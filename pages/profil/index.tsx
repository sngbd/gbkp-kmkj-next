import styles from '@/styles/Profil.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Profil () {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Profil GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus']}>
          <Link href="/profil/sejarah" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/profil/1.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Profil</div>
              <div className={styles['headline']}>Sejarah Gereja Batak Karo Protestan</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/profil/statistik" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/profil/2.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Profil</div>
              <div className={styles['headline']}>Statistik Gereja Batak Karo Protestan</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/profil/bpmk" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/profil/3.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Profil</div>
              <div className={styles['headline']}>Badan Pekerja Klasis Medan Kutajurung</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/profil/personalia" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/profil/4.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Profil</div>
              <div className={styles['headline']}>Data Personalia GBKP Klasis Medan Kutajurung</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Profil;
