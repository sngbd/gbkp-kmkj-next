import HeroSection from '@/components/HeroSection';
import ProfileCards from '@/components/ProfileCards';
import { createClient } from '@/prismicio';
import overlayStyles from '@/styles/Overlay.module.css'

function Personalia ({ results }: any) {
  const rowLength = Math.round(results[0].data.personalia.length / 2);
  return (
    <>
      <HeroSection title="Personalia" subTitle="Badan Pekerja Majelis Klasis" height={rowLength * 220 + (rowLength - 1) * 25} overlay={
        <div className={overlayStyles['profiles_container']}>
          <ProfileCards profiles={results[0].data.personalia} />
        </div>
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
