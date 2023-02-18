import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Saitun({ results }: any) {
  return (
    <>
      <Kategorial linkTo="/saitun" title="Saitun" kegiatan={results} path='/saitun/kegiatan' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-saitun')

  return {
    props: { results }
  }
}


export default Saitun;
