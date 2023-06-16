import HeroSection from '@/components/HeroSection';
import ProfileCards from '@/components/ProfileCards';
import { createClient } from '@/prismicio';

function BPMK ({ results }: any) {
  return (
    <>
      <HeroSection title="BPMK" subTitle="Badan Pekerja Majelis Klasis" height={"6rem 0rem"} overlay={
        <ProfileCards profiles={results[0].data.bpmk} />
      } />
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
