import styles from '@/styles/Cards.module.css';
import Link from 'next/link';
import Page from '@/components/Page';
import { createClient } from '@/prismicio';

function Runggun({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Runggun" content={
          <ol> {
            results.map((r: any) => {
              const link = `/runggun/${r.uid}`
              return (
                <li key={r.id} className='mb-3.5'>
                  <Link href={link}>
                    {r.data.nama_runggun}
                  </Link>
                </li>
              )
            })
          }
          </ol>
        } />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const client = createClient();
  
  const { results } = await client.getByType('runggun');
  
  return {
    props: { results }
  }
}

export default Runggun;
