import Page from '@/components/Page';

import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Laporan({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Laporan Keuangan" content={
          <iframe src={results[0].data.laporan.url} width="1000" height="1000" title="laporan"/>
        } />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('laporan_keuangan')

  return {
    props: { results }
  }
}

export default Laporan;
