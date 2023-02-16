import Renungan from "@/components/Renungan";
import { createClient } from "@/prismicio";

function PJJ({ results }: any) {
  return (
    <>
      <Renungan judul="PJJ" path="/pjj" bahanRenungan={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('pjj');
  
  return {
    props: { results }
  }
}

export default PJJ;
