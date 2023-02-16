import Kepengurusan from "@/components/Kepengurusan";
import { createClient } from "@/prismicio";

function Moria({ results }: any) {
  return (
    <>
      <Kepengurusan title="Moria" kategorial="moria" document={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kepengurusan-moria');
  
  return {
    props: { results }
  }
}

export default Moria;
