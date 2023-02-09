import { createClient } from "@/prismicio";
import { GetStaticPropsContext } from "next";
import styles from '@/styles/Cards.module.css'
import Page from "@/components/Page";
import Profile from "@/components/Profile";

function Runggun({ data }: any) {
  return (
    <>
      <div className={styles['article']}>
        <Page title={`BPMR ${data.nama_runggun}`} content="" />
      </div>
      {data.bpmr.map((item: any) => <Profile key={item.nama} profile={item} />)}
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('runggun', uid)

  return {
    props: { data },
  }
}

export async function getStaticPaths() {
  const client = createClient()

  const { results } = await client.getByType('runggun')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default Runggun;
