import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Moria({ results, cover }: any) {
  return (
    <>
      <Kategorial linkTo="/moria" title="Moria" kegiatan={results} path='/moria/kegiatan-info' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-moria')
  const cover = await client.getByType('cover')

  return {
    props: { results, cover }
  }
}


export default Moria;
