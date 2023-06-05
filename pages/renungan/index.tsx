import { createClient } from '@/prismicio';
import styles from '@/styles/Profil.module.css'
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const links = ["/renungan/kotbah-minggu", "/renungan/pjj", "/renungan/pekan-pekan", "/renungan/harian"];

function Renungan({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Bahan Renungan GBKP Kutajurung</div>
        <div className={styles['desc']}>{results.data.description}</div>
        <div className={styles['menus']}>
          {
            results.data.menu.map((result: any, index: any) => {
              return (
                <>
                  <Link href={links[index]} className={styles['menu']}>
                    <div className={styles['image']}>
                      <Image alt="sejarah" src={result.thumb.url} layout='fill' />
                    </div>
                    <div className={styles['text_container']}>
                      <div className={styles['label']}>Renungan</div>
                      <div className={styles['headline']}>{result.title}</div>
                      <div className={styles['content']}>{result.menu_desc}</div>
                      <div className={styles['more']}>
                        Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
                      </div>
                    </div>
                  </Link>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const client = createClient();
  
  const { results } = await client.getByType('menu_renungan');

  return {
    props: { results: results[0] },
  }
}

export default Renungan;
