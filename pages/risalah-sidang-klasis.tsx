import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Risalah({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Risalah Sidang Klasis" content={
          <iframe src={results[0].data.risalah.url} width="1000" height="1000" title="risalah"/>
        } />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient()

  const { results } = await client.getByType('risalah')

  return {
    props: { results }
  }
}

export default Risalah;
