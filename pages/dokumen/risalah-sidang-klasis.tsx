import Document from '@/components/Document';
import { createClient } from '@/prismicio';

function Risalah({ results }: any) {
  return (
    <>
      <Document 
        document={<iframe src={results[0].data.risalah.url} width="1000" height="1000" title="laporan" />} 
        title="Risalah Sidang Klasis"
        subtitle="GKBP KMKJ"
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('risalah')

  return {
    props: { results }
  }
}

export default Risalah;
