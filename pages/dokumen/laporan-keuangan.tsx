import FileList from '@/components/FileList';
import HeroSection from '@/components/HeroSection';
import { createClient } from '@/prismicio';

function Laporan({ results }: any) {
  return (
    <>
      <HeroSection
        title="Laporan Keuangan"
        subTitle="GBKP Klasis Medan Kutajurung"
        height={results[0].data.files.length - 1 < 9 ? 850 + (results[0].data.files.length * 65) : 1400}
        overlay={<FileList results={results} type="laporan" />}
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('laporan_keuangan')

  return {
    props: { results }
  }
}

export default Laporan;
