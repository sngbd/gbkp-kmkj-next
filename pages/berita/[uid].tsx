import Artikel from "@/components/Artikel";
import HeroSection from "@/components/HeroSection";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { GetServerSidePropsContext } from "next";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

function BeritaPost ({ data }: any) {
  const [height, setHeight] = useState(0);
  const ref: any = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, []);

  return (
    <>
      <HeroSection height={height - 340} overlay={<Artikel refr={ref} berita={data} />} />
    </>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const uid: any = context.params!.uid;

  const client = createClient()

  const { data } = await client.getByUID('berita', uid)

  return {
    props: { data },
  }
}

export async function getServerSidePaths() {
  const client = createClient()

  const { results } = await client.getByType('berita')

  const paths = results.map(({ uid }: any) => ({ params: { uid } }))

  return {
    paths,
    fallback: false,
  }
}
  
export default BeritaPost;
