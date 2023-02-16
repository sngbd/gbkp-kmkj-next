import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Musyawarah({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Musyawarah Ngawan" content={
          <iframe src={results[0].data.musyawarah.url} width="1000" height="1000" title="musyawarah"/>
        } />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('musyawarah_ngawan')

  return {
    props: { results }
  }
}

export default Musyawarah;
