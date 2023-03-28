import HeroSection from '@/components/HeroSection';
import Page from '@/components/Page';
import Profile from '@/components/Profile';
import ProfileCards from '@/components/ProfileCards';
import { createClient } from '@/prismicio';
import overlayStyles from '@/styles/Overlay.module.css'

function BPMK ({ results }: any) {
  const rowLength = Math.round(results[0].data.bpmk.length / 2);
  return (
    <>
      <HeroSection title="BPMK" subTitle="Badan Pekerja Majelis Klasis" height={rowLength * 220 + (rowLength - 1) * 25} overlay={
        <div className={overlayStyles['profiles_container']}>
          <ProfileCards profiles={results[0].data.bpmk} />
        </div>
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
