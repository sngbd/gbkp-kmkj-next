import styles from '@/styles/SejarahBPMK.module.css'
import Image from 'next/image';
import Link from 'next/link';

function SejarahBPMK({ results }: any) {
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['title']}>Sejarah BPMK</div>
        <div className={styles['menus']}>
          {
            results.map((result: any, index: any) => {
              return (
                <>
                  <Link href={`/profil/sejarah/${result.uid}`} className={styles['menu']}>
                    <div className={styles['image']}>
                      <Image alt="image" src={result.data.thumbnail.url} layout='fill' />
                    </div>
                    <div className={styles['text_container']}>
                      <div className={styles['label']}>BPMK</div>
                      <div className={styles['headline']}>{result.data.judul}</div>
                      <div className={styles['content']}>{result.data.description}</div>
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

export default SejarahBPMK;
