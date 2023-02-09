import Kepengurusan from "@/components/Kepengurusan";
import { createClient } from "@/prismicio";

function KaKr({ results }: any) {
  return (
    <>
      <Kepengurusan title="Ka.Kr" kategorial="kakr" document={results} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient();
  
  const { results } = await client.getByType('kepengurusan-kakr');
  
  return {
    props: { results }
  }
}

export default KaKr;
