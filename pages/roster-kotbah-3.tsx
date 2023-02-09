import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Roster({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Roster Kotbah Minggu ke-3" content={
          <iframe src={results[0].data.roster_pdf.url} width="1000" height="1000" title="roster"/>
        } />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const client = createClient()

  const { results } = await client.getByType('roster_minggu_3')

  return {
    props: { results }
  }
}

export default Roster;
