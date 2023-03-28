import BahanPA from "@/components/BahanPA";
import { createClient } from "@/prismicio";

function Permata({ results }: any) {
  return (
    <>
      <BahanPA judul="Permata" bahanPa={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('bahan-pa-permata');
  
  return {
    props: { results }
  }
}

export default Permata;
