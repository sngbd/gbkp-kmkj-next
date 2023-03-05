import { PrismicRichText } from '@prismicio/react'
import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import Link from 'next/link';
import Image from 'next/image';

const Preview = ({ results }: any) => {
  const content = (
    results.map((b: any) => {
      return (
        <div key={b.data.judul} className='m-10 border border-solid rounded shadow-md hover:shadow-sm max-w-3xl p-3'>
          <Link href={`/moria/kegiatan-info/${b.uid}`} className="no-underline text-black">
            <h1 className='text-left text-base mb-2 lg:text-xl'>{b.data.judul}</h1>
            <div className='border border-solid border-x-0 border-b-transparent relative z-10 text-justify p-2'>
              <Image src={b.data.kegiatan.filter((data: any) => data.type === 'image')[0]?.url} className="relative float-left mr-2.5 w-full rounded md:w-1/2 h-1/2" alt="" width={337} height={200} />
              <PrismicRichText field={b.data.kegiatan.filter((data: any) => data.type !== "image").slice(0, 2)} />
            </div>
          </Link>
        </div>
      );
    })
  );

  return (
    <>
      <Page title='Kegiatan & Info Moria' content={content} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const { results } = await client.getByType('kegiatan-moria')

  return {
    props: { results }
  }
}

export default Preview;
