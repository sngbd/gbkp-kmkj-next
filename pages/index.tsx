import { createClient } from '@/prismicio'
import HeroSection from '@/components/HeroSection'
import Cards from '@/components/Cards'
import Hero from '@/components/Hero';
import Berita from '@/components/Berita';
import Mingguan from '@/components/Mingguan';
import Personalia from '@/components/Personalia';

const Home = ({ berita, personalia }: any) => {
  return ( 
    <>
      {/* <HeroSection 
        cName='hero-container'
        image='/images/gbkp-kmk.jpeg'
        alt='gereja'
        title='GBKP KMKJ'
        desc='Gereja Batak Karo Protestan Klasis Medan Kutajurung'
      /> */}
      <Hero />
      <Berita berita={berita.results.slice(0, 3)} />
      <Mingguan />
      <Personalia personalia={personalia.results[0].data.personalia} />
      {/* <Cards content={results} /> */}
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const berita = await client.getByType('berita')
  const personalia = await client.getByType('personalia')

  return {
    props: { berita, personalia }
  }
}

export default Home