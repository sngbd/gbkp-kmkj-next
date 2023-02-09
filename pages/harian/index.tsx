import Renungan from "@/components/Renungan";
import { createClient } from "@/prismicio";

function Harian({ results }: any) {
  return (
    <>
      <Renungan judul="Harian" path="/harian" bahanRenungan={results} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient();
  
  const { results } = await client.getByType('harian');
  
  return {
    props: { results }
  }
}

export default Harian;
