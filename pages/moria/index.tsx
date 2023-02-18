import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Moria({ results }: any) {
  return (
    <>
      <Kategorial linkTo="/moria" title="Moria" kegiatan={results} path='/moria/kegiatan' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-moria')

  return {
    props: { results }
  }
}


export default Moria;
