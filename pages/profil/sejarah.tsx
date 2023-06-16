import { createClient } from '@/prismicio';
import styles from '@/styles/Sejarah.module.css'
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

function Sejarah ({ results }: any) {
  const components = {
    heading1: ({ children }: any) => (
      <div className={styles['header']}>{children}</div>
    ),
    heading2: ({ children }: any) => (
      <div className={styles['header2']}>{children}</div>
    ),
    heading3: ({ children }: any) => (
      <div className={styles['header3']}>{children}</div>
    ),
    image: ({ node }: any) => (
      <Image src={node.url} width={node.dimensions.width} height={node.dimensions.height} alt="gereja" />
    ),
    paragraph: ({ children }: any) => (
      <div className={styles['body']}>{children}</div>
    ),
    oList: ({ children }: any) => (
      <div className={styles['body']}>
        <ol>{children}</ol>
      </div>
    ),
  }

  return (
    <> 
      <div className={styles['container']}>
        <div className={styles['inner']}>
          <div className={styles['title']}>Sejarah GBKP</div>
          <div className={styles['subtitle']}>Gereja Batak Karo Protestan</div>
          <PrismicRichText field={results[0].data.sejarah} components={components} />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const client = createClient();

  const { results } = await client.getByType('sejarah');

  return {
    props: { results },
  }
}

export default Sejarah;
