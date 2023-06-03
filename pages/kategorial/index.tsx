import styles from '@/styles/Profil.module.css'
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/prismicio';

function Kategorial({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Kategorial GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus5']}>
          <Link href="/kategorial/mamre" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="mamre" src={results[0].data.mamre.url} layout='fill' />
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
              <Image alt="moria" src={results[0].data.moria.url} layout='fill' />
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
              <Image alt="permata" src={results[0].data.permata.url} layout='fill' />
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
              <Image alt="ka-kr" src={results[0].data.kakr.url} layout='fill' />
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
              <Image alt="saitun" src={results[0].data.saitun.url} layout='fill' />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient();
  
  const { results } = await client.getByType('cover');

  return {
    props: { results },
  }
}

export default Kategorial;
