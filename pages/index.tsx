import { createClient } from '@/prismicio'
import Hero from '@/components/Hero';
import Berita from '@/components/Berita';
import Mingguan from '@/components/Mingguan';
import Personalia from '@/components/Personalia';
import Info from '@/components/Info';

const Home = ({ berita, bpmk }: any) => {
  return ( 
    <>
      <Hero title="GBKP Klasis Medan Kutajurung" left="Hubungi Kami" right="Lokasi Kantor" />
      <Info />
      <Berita berita={berita.results.slice(0, 3)} />
      <Mingguan />
      <Personalia bpmk={bpmk.results[0].data.bpmk} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const berita = await client.getByType('berita')
  const bpmk = await client.getByType('bpm')

  return {
    props: { berita, bpmk }
  }
}

export default Home