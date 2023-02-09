import Kepengurusan from "@/components/Kepengurusan";
import { createClient } from "@/prismicio";

function Permata({ results }: any) {
  return (
    <>
      <Kepengurusan title="Permata" kategorial="permata" document={results} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kepengurusan-permata');
  
  return {
    props: { results }
  }
}

export default Permata;
