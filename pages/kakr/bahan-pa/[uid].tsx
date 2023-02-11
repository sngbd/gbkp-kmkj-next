import Article from "@/components/Article";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { GetStaticPropsContext } from "next";

function BahanPAKaKr ({ data }: any) {
  return (
    <>
      <Article title={data.judul} content={ <PrismicRichText field={data['bahan-pa']} /> } />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('bahan-pa-ka.kr', uid)

  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const { results } = await client.getByType('bahan-pa-ka.kr')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default BahanPAKaKr;