import { createClient } from '@/prismicio';
import styles from '@/styles/Profil.module.css'
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

function Renungan({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Bahan Renungan GBKP Kutajurung</div>
        <div className={styles['desc']}>Lorem ipsum dolor sit amet consectetur. Sed tincidunt eget morbi congue nunc enim. Venenatis sapien sit eget urna. Egestas </div>
        <div className={styles['menus']}>
          <Link href="/renungan/kotbah-minggu" className={styles['menu']}>
            <div className={styles['image']}>
              <Image alt="kotbah-minggu" src={results[0].data.khotbah_minggu.url} layout='fill' />
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
              <Image alt="pjj" src={results[0].data.pjj.url} layout='fill' />
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
              <Image alt="pekan-pekan" src={results[0].data.pekan.url} layout='fill' />
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
              <Image alt="harian" src={results[0].data.harian.url} layout='fill' />
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient();
  
  const { results } = await client.getByType('cover_renungan');

  return {
    props: { results },
  }
}

export default Renungan;
