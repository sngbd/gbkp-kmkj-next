import HeroSection from '@/components/HeroSection';
import ProfileCards from '@/components/ProfileCards';
import { createClient } from '@/prismicio';
import { GetServerSidePropsContext } from 'next';

function BPMK({ data }: any) {
  return (
    <>
      <HeroSection
        title={data.judul}
        subTitle="GBKP Klasis Medan Kutajurung"
        height={"6rem 0rem"}
        overlay={<ProfileCards profiles={data.bpmk} />}
      />
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient();
  
  const { data } = await client.getByUID('sejarah_bpmk', uid);

  return {
    props: { data },
  }
}

export default BPMK;
