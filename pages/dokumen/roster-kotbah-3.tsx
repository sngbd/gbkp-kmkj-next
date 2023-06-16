import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Roster({ results }: any) {
  return (
    <>
      <HeroSection
        title="Roster Minggu 3"
        subTitle="GBKP Klasis Medan Kutajurung" 
        height={"6rem 0rem"}
        overlay={<FileList results={results} type="roster_pdf" />}
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('roster_minggu_3')

  return {
    props: { results }
  }
}

export default Roster;
