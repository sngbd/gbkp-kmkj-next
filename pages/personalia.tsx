import Page from '@/components/Page';
import Profile from '@/components/Profile';
import { createClient } from '@/prismicio';
import styles from '@/styles/Cards.module.css'
import profileStyles from '@/styles/ProfileCard.module.css';

function Personalia ({ results }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title="Personalia" cardStyle='cards__profile' content={
          <div className={profileStyles['profiles-container']}>
            {results[0].data.personalia.map((item: any) => <Profile key={item.nama} profile={item} />)}
          </div>
        } />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('personalia')

  return {
    props: { results }
  }
}

export default Personalia;
