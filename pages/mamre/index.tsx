import Kategorial from "@/components/Kategorial";
import { createClient } from "@/prismicio";

function Mamre({ results, cover }: any) {
  return (
    <>
      <Kategorial linkTo="/mamre" title="Mamre" kegiatan={results} cover={cover.results[0].data.mamre.url} path='/mamre/kegiatan-info' />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-mamre')
  const cover = await client.getByType('cover')

  return {
    props: { results, cover }
  }
}


export default Mamre;
