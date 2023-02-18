import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Permata({ results }: any) {
  return (
    <>
      <Kategorial linkTo="/permata" title="Permata" kegiatan={results} path='/permata/kegiatan' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-permata')

  return {
    props: { results }
  }
}


export default Permata;
