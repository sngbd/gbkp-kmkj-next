import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function KaKr({ results, cover }: any) {
  return (
    <>
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-kakr')
  const cover = await client.getByType('cover')

  return {
    props: { results, cover }
  }
}


export default KaKr;
