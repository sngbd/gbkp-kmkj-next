import Kepengurusan from "@/components/Kepengurusan";
import { createClient } from "@/prismicio";

function Saitun({ results }: any) {
  return (
    <>
      <Kepengurusan title="Saitun" kategorial="saitun" document={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kepengurusan-saitun');
  
  return {
    props: { results }
  }
}

export default Saitun;
