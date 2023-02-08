import { createClient } from '@/prismicio'
import HeroSection from '@/components/HeroSection'
import Cards from '@/components/Cards'

const Home = ({ results }: any) => {
  return ( 
    <>
      <HeroSection />
      <Cards content={results} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient()

  const { results } = await client.getByType('berita')

  return {
    props: { results }
  }
}

export default Home