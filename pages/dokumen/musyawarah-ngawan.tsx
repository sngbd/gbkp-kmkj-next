import Document from '@/components/Document';
import { createClient } from '@/prismicio';

function Musyawarah({ results }: any) {
  return (
    <>
      <Document 
        document={<iframe src={results[0].data.musyawarah.url} width="1000" height="1000" title="laporan" />} 
        title="Musyawarah Ngawan"
        subtitle="GKBP KMKJ"
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('musyawarah_ngawan')

  return {
    props: { results }
  }
}

export default Musyawarah;
