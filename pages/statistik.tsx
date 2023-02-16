import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Statistik ({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Statistik GBKP KMKJ 2022" content={
          <iframe src={results[0].data.statistik_pdf.url} width="1000" height="1000" title="statistik"/>
        } />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('statistik')

  return {
    props: { results }
  }
}

export default Statistik;
