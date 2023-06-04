import Hero from "@/components/Hero";
import Kegiatan from "@/components/Kegiatan";
import { GetServerSidePropsContext } from "next";
import kategorial from "@/helpers/Kategorial";
import { createClient } from "@/prismicio";

function Kategorial({ kategori, title, results, filtBerita }: any) {
  return (
    <>
      <Hero
        title={kategori.title}
        left="Kepengurusan"
        leftLink={kategori.leftLink}
        right="Bahan PA"
        rightLink={kategori.rightLink}
        bg={results[0].data[title].url}
      />
      <Kegiatan subheader={kategori.subheader} filtBerita={filtBerita} />
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
    
  const client = createClient();
  
  const { results } = await client.getByType('cover');
  const berita = await client.getByType('berita');
  
  const filtBerita = berita.results.filter((b: any) => b.data.kategori === kategori.title);

  return {
    props: { kategori, title, results, filtBerita },
  }
}

export default Kategorial;
