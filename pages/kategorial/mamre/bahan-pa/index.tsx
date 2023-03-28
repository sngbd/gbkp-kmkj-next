import BahanPA from "@/components/BahanPA";
import { createClient } from "@/prismicio";

function Mamre({ results }: any) {
  return (
    <>
      <BahanPA judul="Mamre" bahanPa={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('bahan-pa-mamre');
  
  return {
    props: { results }
  }
}

export default Mamre;
