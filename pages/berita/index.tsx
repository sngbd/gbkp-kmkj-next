import { createClient } from '@/prismicio';
import HeroSection from '@/components/HeroSection';
import BeritaHome from '@/components/BeritaHome';
import { useRouter } from 'next/router';

const Preview = ({ results }: any) => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      <HeroSection title="Berita" subTitle="GBKP Klasis Medan Kutajurung" height={1700} overlay={<BeritaHome page={page ?? 1} berita={results} />} />
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

export default Preview;