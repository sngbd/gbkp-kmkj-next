import styles from '@/styles/Profil.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Renungan() {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Bahan Renungan GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus']}>
          <Link href="/renungan/kotbah-minggu" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/renungan/1.png" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Renungan</div>
              <div className={styles['headline']}>Khotbah Minggu</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/renungan/pjj" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/renungan/2.png" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Renungan</div>
              <div className={styles['headline']}>PJJ</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/renungan/pekan-pekan" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/renungan/3.png" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Renungan</div>
              <div className={styles['headline']}>Pekan-pekan</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/renungan/harian" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/renungan/4.png" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Renungan</div>
              <div className={styles['headline']}>Harian</div>
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

export default Renungan;
