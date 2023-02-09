import { PrismicRichText } from '@prismicio/react'
import Page from '@/components/Page';
import { createClient } from '@/prismicio';
import Link from 'next/link';
import Image from 'next/image';

const Preview = ({ results }: any) => {
  const content = (
    results.map((b: any) => {
      return (
        <div key={b.data.judul} className='m-10 border border-solid rounded-lg shadow-md hover:shadow-sm max-w-3xl p-3'>
          <Link href={`/berita/${b.uid}`} className="no-underline text-black">
            <h1 className='text-left text-2xl mb-2'>{b.data.judul}</h1>
            <div className='border border-solid border-x-0 border-b-transparent relative z-10 text-justify p-2'>
              <Image src={b.data.berita.filter((data: any) => data.type === 'image')[0].url} className="relative float-left w-1/2 mr-2.5" alt="" width={337} height={200} />
              <PrismicRichText field={b.data.berita.filter((data: any) => data.type !== "image").slice(0, 2)} />
            </div>
          </Link>
        </div>
      );
    })
  );

  return (
    <>
      <Page title='Berita' content={content} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient()

  const { results } = await client.getByType('berita')

  return {
    props: { results }
  }
}

export default Preview;