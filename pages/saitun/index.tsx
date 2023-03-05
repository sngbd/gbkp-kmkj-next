import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Saitun({ results, cover }: any) {
  return (
    <>
      <Kategorial linkTo="/saitun" title="Saitun" kegiatan={results} cover={cover.results[0].data.saitun.url} path='/saitun/kegiatan-info' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-saitun')
  const cover = await client.getByType('cover')

  return {
    props: { results, cover }
  }
}


export default Saitun;
