import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Permata({ results, cover }: any) {
  return (
    <>
      <Kategorial linkTo="/kategorial/permata" title="Permata" kegiatan={results} cover={cover.results[0].data.moria.url} path='/kategorial/permata/kegiatan-info' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-permata')
  const cover = await client.getByType('cover')

  return {
    props: { results, cover }
  }
}


export default Permata;
