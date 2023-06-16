import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Risalah({ results }: any) {
  return (
    <>
      <HeroSection
        title="Risalah"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={"6rem 0rem"}
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
