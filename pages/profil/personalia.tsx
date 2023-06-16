import HeroSection from '@/components/HeroSection';
import ProfileCards from '@/components/ProfileCards';
import { createClient } from '@/prismicio';

function Personalia ({ results }: any) {
  return (
    <>
      <HeroSection title="Personalia" subTitle="Badan Pekerja Majelis Klasis" height={"6rem 0rem"} overlay={
        <ProfileCards profiles={results[0].data.personalia} />
      } />
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
