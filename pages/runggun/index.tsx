import styles from '@/styles/RunggunList.module.css';
import Link from 'next/link';
import { createClient } from '@/prismicio';
import HeroSection from '@/components/HeroSection';

function Runggun({ results }: any) {
  return (
    <>
      <HeroSection title="Runggun" subTitle="GBKP Klasis Medan Kutajurung" />
      <div className={styles['container']}>
        <div className={styles['inner']}>
          {
            results.map((r: any) => {
              return (
              <>
                <div className={styles['item']}>
                  <div className={styles['border']}>
                    <Link key={r.id} className={styles['button']} href={`/runggun/${r.uid}`}>
                      {r.data.nama_runggun}
                    </Link>
                  </div>
                </div>
              </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('runggun');
  
  return {
    props: { results }
  }
}

export default Runggun;
