import HeroSection from '@/components/HeroSection';
import styles from '@/styles/Overlay.module.css'
import { createClient } from '@/prismicio';

function Statistik ({ results }: any) {
  return (
    <>
      <HeroSection title="Statistik" subTitle="GBKP Klasis Medan Kutajurung" height={849} overlay={
        <div className={styles.container}>
          <iframe src={results[0].data.statistik_pdf.url} width="1194" height="849" title="statistik"/>
        </div>
      } />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('statistik')

  return {
    props: { results }
  }
}

export default Statistik;
