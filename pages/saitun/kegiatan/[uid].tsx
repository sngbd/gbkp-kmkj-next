import Article from "@/components/Article";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { GetServerSidePropsContext } from "next";

function KegiatanSaitun ({ data }: any) {
  return (
    <>
      <Article title={data.judul} content={ <PrismicRichText field={data.kegiatan} /> } />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('kegiatan-saitun', uid)

  return {
    props: { data },
  }
}

export async function getServerSidePaths() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-saitun')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default KegiatanSaitun;
