import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Risalah({ results }: any) {
  return (
    <>
      <HeroSection
        title="Risalah"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={results[0].data.files.length - 1 < 9 ? 850 + (results[0].data.files.length * 65) : 1400}
        overlay={<FileList results={results} type="risalah" />}
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('risalah')

  return {
    props: { results }
  }
}

export default Risalah;
