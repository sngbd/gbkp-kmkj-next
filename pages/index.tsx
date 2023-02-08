import { createClient } from '@/prismicio'
import HeroSection from '@/components/HeroSection'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Home = ({ results }: any) => {
  return ( 
    <>
      <Navbar />
      <HeroSection />
      <Cards content={results} />
      <Footer />
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