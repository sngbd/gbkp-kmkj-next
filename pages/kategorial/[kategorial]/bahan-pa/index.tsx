import { GetServerSidePropsContext } from "next";
import kategorial from "@/helpers/Kategorial";
import { createClient } from "@/prismicio";
import ListArticles from "@/components/ListArticles";
import { useRouter } from "next/router";

function Kepengurusan({ results, kategori, title }: any) {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      <ListArticles articles={results} link={`/kategorial/${title}/bahan-pa/`} title={kategori.title} page={page} />
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

  const { results } = await client.getByType(kategori?.bahanPa)

  return {
    props: { results, kategori, title }
  }
}

export default Kepengurusan;
