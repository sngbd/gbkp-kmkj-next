import { GetServerSidePropsContext } from "next";
import kategorial from "@/helpers/Kategorial";
import { createClient } from "@/prismicio";
import Renungan from "@/components/Renungan";

function Kepengurusan({ data }: any) {
  return (
    <>
      <Renungan renungan={data} type="bahan-pa" />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;
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

  const { data } = await client.getByUID(kategori?.bahanPa, uid)

  return {
    props: { data }
  }
}

export async function getServerSidePaths(context: GetServerSidePropsContext) {
  const title: any = context.params!.title;

  let kategori: any;
  if (title === 'mamre')
    kategori = title.mamre;
  else if (title === 'moria')
    kategori = title.moria;
  else if (title === 'kakr')
    kategori = title.kakr;
  else if (title === 'saitun')
    kategori = title.saitun;
  else if (title === 'permata')
    kategori = title.permata;

  const client = createClient()

  const { results } = await client.getByType(title.bahanPa)

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}

export default Kepengurusan;
