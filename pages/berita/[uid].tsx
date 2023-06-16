import Artikel from "@/components/Artikel";
import { createClient } from "@/prismicio";
import { GetServerSidePropsContext } from "next";

function BeritaPost ({ data }: any) {
  return (
    <>
      <Artikel berita={data} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('berita', uid)

  return {
    props: { data },
  }
}

export async function getServerSidePaths() {
  const client = createClient()

  const { results } = await client.getByType('berita')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default BeritaPost;
