import { GetServerSidePropsContext } from "next";
import kategorial from "@/helpers/Kategorial";
import HeroSection from "@/components/HeroSection";
import overlayStyles from '@/styles/Overlay.module.css'
import ProfileCards from "@/components/ProfileCards";
import { createClient } from "@/prismicio";

function Kepengurusan({ results, kategori, title }: any) {
  const rowLength = Math.round(results[0].data[title].length / 2);

  return (
    <>
      <HeroSection title={kategori.title} subTitle="Kategorial GBKP KMKJ" height={rowLength * 220 + (rowLength - 1) * 25} overlay={
        <div className={overlayStyles['profiles_container']}>
          <ProfileCards profiles={results[0].data[title]} />
        </div>
      } />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const title: any = context.params!.kategorial;

  let kategori: any;
  if (title === 'mamre')
    kategori = kategorial.mamre;
  else if (title === 'moria')
    kategori = kategorial.moria;
  else if (title === 'kakr')
    kategori = kategorial.kakr;
  else if (title === 'saitun')
    kategori = kategorial.saitun;
  else if (title === 'permata')
    kategori = kategorial.permata;

  const client = createClient()

  const { results } = await client.getByType(kategori?.kepengurusan)

  return {
    props: { results, kategori, title }
  }
}

export default Kepengurusan;
