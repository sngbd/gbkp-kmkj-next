import { GetServerSidePropsContext } from "next";
import { createClient } from "@/prismicio";
import Renungan from "@/components/Renungan";

function DetailRenungan({ data }: any) {
  return (
    <>
      <Renungan renungan={data} type="renungan" />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const renungan: any = context.params!.renungan;
  const uid: any = context.params!.uid;

  const client = createClient();
  
  const { data } = await client.getByUID(renungan, uid);

  return {
    props: { data },
  }
}

export default DetailRenungan;
