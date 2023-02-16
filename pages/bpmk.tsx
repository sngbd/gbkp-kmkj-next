import Page from '@/components/Page';
import Profile from '@/components/Profile';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function BPMK ({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="BPMK" content="" />
      </div>
      {results[0].data.bpmk.map((item: any) => <Profile key={item.nama} profile={item} />)}
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('bpm')

  return {
    props: { results }
  }
}

export default BPMK;
