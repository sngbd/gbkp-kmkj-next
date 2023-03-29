import Document from '@/components/Document';
import { createClient } from '@/prismicio';

function Roster({ results }: any) {
  return (
    <>
      <Document 
        document={<iframe src={results[0].data.roster_pdf.url} width="1000" height="1000" title="laporan" />} 
        title="Roster Minggu 3"
        subtitle="GKBP KMKJ"
      />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('roster_minggu_3')

  return {
    props: { results }
  }
}

export default Roster;
