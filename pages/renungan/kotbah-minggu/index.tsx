import ListRenungan from "@/components/ListRenungan";
import Renungan from "@/components/Renungan";
import { createClient } from "@/prismicio";

function KotbahMinggu({ results }: any) {
  return (
    <>
      <ListRenungan />
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kotbah-minggu');
  
  return {
    props: { results }
  }
}

export default KotbahMinggu;
