import { createClient } from '@/prismicio';
import styles from '@/styles/Profil.module.css'
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

function Profil({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Profil GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus']}>
          <Link href="/profil/sejarah" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="sejarah" src={results[0].data.sejarah.url} layout='fill' />
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
              <Image alt="statistik" src={results[0].data.statistik.url} layout='fill' />
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
              <Image alt="bpmk" src={results[0].data.bpmk.url} layout='fill' />
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
              <Image alt="personalia" src={results[0].data.personalia.url} layout='fill' />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient();
  
  const { results } = await client.getByType('cover_profil');

  return {
    props: { results },
  }
}

export default Profil;
