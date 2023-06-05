import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';
import FileList from '@/components/FileList';

function Statistik ({ results }: any) {
  return (
    <>
      <HeroSection
        title="Statistik"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={results[0].data.files.length - 1 < 9 ? 850 + (results[0].data.files.length * 65) : 1400}
        overlay={<FileList results={results} type="statistik_pdf" />}
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('statistik')

  return {
    props: { results }
  }
}

export default Statistik;
