import BahanPA from "@/components/BahanPA";
import { createClient } from "@/prismicio";

function Moria({ results }: any) {
  return (
    <>
      <BahanPA judul="Moria" bahanPa={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('bahan-pa-moria');
  
  return {
    props: { results }
  }
}

export default Moria;
