import styles from '@/styles/Profil.module.css'
import Image from 'next/image';
import Link from 'next/link';

function Kategorial() {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Kategorial GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus5']}>
          <Link href="/kategorial/mamre" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/kategorial/1.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Kategorial</div>
              <div className={styles['headline']}>Mamre</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/kategorial/moria" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/kategorial/2.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Kategorial</div>
              <div className={styles['headline']}>Moria</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/kategorial/permata" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/kategorial/3.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Kategorial</div>
              <div className={styles['headline']}>Permata</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/kategorial/kakr" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/kategorial/4.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Kategorial</div>
              <div className={styles['headline']}>Ka-Kr</div>
              <div className={styles['content']}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquen.</div>
              <div className={styles['more']}>
                Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
              </div>
            </div>
          </Link>
          <Link href="/kategorial/saitun" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="image" src="/kategorial/5.jpg" layout='fill' />
            </div>
            <div className={styles['text_container']}>
              <div className={styles['label']}>Kategorial</div>
              <div className={styles['headline']}>Saitun</div>
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

export default Kategorial;
