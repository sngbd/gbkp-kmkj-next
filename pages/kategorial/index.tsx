import styles from '@/styles/Profil.module.css'
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@/prismicio';

const links = ["/kategorial/mamre", "/kategorial/moria", "/kategorial/permata", "/kategorial/kakr", "/kategorial/saitun"];

function Kategorial({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Kategorial GBKP Kutajurung</div>
        <div className={styles['desc']}>{results.data.description}</div>
        <div className={styles['menus5']}>
          {
            results.data.menu.map((result: any, index: any) => {
              return (
                <>
                  <Link key={result.title} href={links[index]} className={styles['menu']}>
                    <div className={styles['image']}>
                      <Image alt="kategorial" src={result.thumb.url} layout='fill' />
                    </div>
                    <div className={styles['text_container']}>
                      <div className={styles['label']}>Kategorial</div>
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
  
  const { results } = await client.getByType('menu_kategorial');

  return {
    props: { results: results[0] },
  }
}

export default Kategorial;
