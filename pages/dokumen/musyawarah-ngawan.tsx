import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Musyawarah({ results }: any) {
  return (
    <>
      <HeroSection
        title="Musyawarah Ngawan"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={"6rem 0rem"}
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
