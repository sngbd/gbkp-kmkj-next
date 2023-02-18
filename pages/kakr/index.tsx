import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function KaKr({ results }: any) {
  return (
    <>
      <Kategorial linkTo="/kakr" title="Ka.Kr" kegiatan={results} path='/kakr/kegiatan' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-kakr')

  return {
    props: { results }
  }
}


export default KaKr;
