import Page from '@/components/Page';
import Profile from '@/components/Profile';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'

function Personalia ({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Personalia" content="" />
      </div>
      {results[0].data.personalia.map((item: any) => <Profile key={item.nama} profile={item} />)}
    </>
  );
}

export async function getStaticProps() {
  const client = createClient()

  const { results } = await client.getByType('personalia')

  return {
    props: { results }
  }
}

export default Personalia;
