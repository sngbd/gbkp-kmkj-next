import { createClient } from '@/prismicio'
import HeroSection from '@/components/HeroSection'
import Cards from '@/components/Cards'

const Home = ({ results }: any) => {
  return ( 
    <>
      <HeroSection 
        cName='hero-container'
        image='/images/gbkp-kmk.jpeg'
        alt='gereja'
        title='GBKP KMKJ'
        desc='Gereja Batak Karo Protestan Klasis Medan Kutajurung'
      />
      <Cards content={results} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('berita')

  return {
    props: { results }
  }
}

export default Home