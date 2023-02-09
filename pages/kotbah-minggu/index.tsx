import Renungan from "@/components/Renungan";
import { createClient } from "@/prismicio";

function KotbahMinggu({ results }: any) {
  return (
    <>
      <Renungan judul="Kotbah Minggu" path="/kotbah-minggu" bahanRenungan={results} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kotbah-minggu');
  
  return {
    props: { results }
  }
}

export default KotbahMinggu;
