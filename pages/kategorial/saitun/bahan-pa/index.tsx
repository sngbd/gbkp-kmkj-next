import BahanPA from "@/components/BahanPA";
import { createClient } from "@/prismicio";

function Saitun({ results }: any) {
  return (
    <>
      <BahanPA judul="Saitun" bahanPa={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('bahan-pa-saitun');
  
  return {
    props: { results }
  }
}

export default Saitun;
