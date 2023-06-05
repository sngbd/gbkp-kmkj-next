import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Musyawarah({ results }: any) {
  return (
    <>
      <HeroSection
        title="Musyawarah Ngawan"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={results[0].data.files.length - 1 < 9 ? 850 + (results[0].data.files.length * 65) : 1400}
        overlay={<FileList results={results} type="musyawarah" />}
      />
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
