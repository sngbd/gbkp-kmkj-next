import Renungan from "@/components/Renungan";
import { createClient } from "@/prismicio";

function Pekan({ results }: any) {
  return (
    <>
      <Renungan judul="Pekan-Pekan" path="/renungan/pekan-pekan" bahanRenungan={results} />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('pekan-pekan');
  
  return {
    props: { results }
  }
}

export default Pekan;
