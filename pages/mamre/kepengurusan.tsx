import Kepengurusan from "@/components/Kepengurusan";
import { createClient } from "@/prismicio";

function Mamre({ results }: any) {
  return (
    <>
      <Kepengurusan title="Mamre" kategorial="mamre" document={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kepengurusan-mamre');
  
  return {
    props: { results }
  }
}

export default Mamre;
