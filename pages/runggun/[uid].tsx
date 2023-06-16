import { GetServerSidePropsContext } from "next";
import HeroSection from "@/components/HeroSection";
import ProfileCards from "@/components/ProfileCards";
import { createClient } from "@/prismicio";

function Runggun({ data }: any) {
  const rowLength = Math.round(data.bpmr.length / 2);

  return (
    <>
      <HeroSection title={data.nama_runggun} subTitle="GBKP KMKJ" height={"6rem 0rem"} overlay={
        <ProfileCards profiles={data.bpmr} />
      } />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('runggun', uid)

  return {
    props: { data },
  }
}

export async function getServerSidePaths() {
  const client = createClient()

  const { results } = await client.getByType('runggun')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default Runggun;
