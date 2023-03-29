import { GetServerSidePropsContext } from "next";
import { createClient } from "@/prismicio";
import ListArticles from "@/components/ListArticles";
import Renungan from "@/helpers/Renungan";

function ListRenungan({ results, renungan, title }: any) {
  return (
    <>
      <ListArticles articles={results} link={`/renungan/${renungan}/`} title={title} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const renungan: any = context.params!.renungan;
  
  let title: any;
  if (renungan === 'harian')
    ({ title } = Renungan['harian']);
  if (renungan === 'kotbah-minggu')
    ({ title } = Renungan['kotbah-minggu']);
  if (renungan === 'pekan-pekan')
    ({ title } = Renungan['pekan-pekan']);
  if (renungan === 'pjj')
    ({ title } = Renungan['pjj']);
    

  const client = createClient()

  const { results } = await client.getByType(renungan)

  return {
    props: { results, renungan, title }
  }
}

export default ListRenungan;
