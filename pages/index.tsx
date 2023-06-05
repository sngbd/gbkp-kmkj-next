import { createClient } from '@/prismicio'
import Hero from '@/components/Hero';
import Berita from '@/components/Berita';
import Mingguan from '@/components/Mingguan';
import Personalia from '@/components/Personalia';
import Info from '@/components/Info';

const Home = ({ berita, bpmk, info, beritaDesc, renungan }: any) => {
  return ( 
    <>
      <Hero title="GBKP Klasis Medan Kutajurung" left="Hubungi Kami" right="Lokasi Kantor" />
      <Info results={info.results[0].data.info} />
      <Berita berita={berita.results.slice(0, 3)} beritaDesc={beritaDesc.results} />
      <Mingguan renungan={renungan.results} />
      <Personalia bpmk={bpmk.results[0].data.bpmk} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const berita = await client.getByType('berita')
  const beritaDesc = await client.getByType('berita_desc')
  const bpmk = await client.getByType('bpm')
  const info = await client.getByType('info_statistik')
  const renungan = await client.getByType('bahan_renungan')

  return {
    props: { berita, bpmk, info, beritaDesc, renungan }
  }
}

export default Home