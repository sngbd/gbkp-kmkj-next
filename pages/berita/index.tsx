import { createClient } from '@/prismicio';
import HeroSection from '@/components/HeroSection';
import BeritaHome from '@/components/BeritaHome';
import { useRouter } from 'next/router';

const Preview = ({ results }: any) => {
  const router = useRouter();
  const { page, kategori }: any = router.query;
  const p = parseInt(page) >= 1 ? (parseInt(page) - 1) * 6 : 0;
  if (kategori) {
    results = results.filter((result: any) => kategori && result.data.kategori === kategori);
  }
  
  return (
    <>
      <HeroSection
        title="Berita"
        subTitle="GBKP Klasis Medan Kutajurung"
        height={"6rem 0rem"}
        overlay={results.length !== 0 && 
          <BeritaHome
            kategori={kategori}
            page={page ?? 1}
            berita={results} 
          />
        }
      />
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