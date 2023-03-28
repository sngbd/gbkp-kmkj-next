import Document from '@/components/Document';
import { createClient } from '@/prismicio';

function Laporan({ results }: any) {
  return (
    <>
      <Document document={<iframe src={results[0].data.laporan.url} width="1000" height="1000" title="laporan" />} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('laporan_keuangan')

  return {
    props: { results }
  }
}

export default Laporan;
