import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Mamre({ results }: any) {
  return (
    <>
      <Kategorial linkTo="/mamre" title="Mamre" kegiatan={results} path='/mamre/kegiatan' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-mamre')

  return {
    props: { results }
  }
}


export default Mamre;
