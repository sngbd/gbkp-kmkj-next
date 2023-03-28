import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function KaKr({ results, cover }: any) {
  return (
    <>
      <Kategorial linkTo="/kategorial/kakr" title="Ka.Kr" kegiatan={results} cover={cover.results[0].data["ka-kr"].url} path='/kategorial/kakr/kegiatan-info' />
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
