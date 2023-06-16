import styles from '@/styles/Artikel.module.css'
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image';

function Artikel({ berita }: any) {
  const components = {
    image: ({ node }: any) => (
      <Image src={node.url} width={node.dimensions.width} height={node.dimensions.height} alt="image" />
    ),
    paragraph: ({ children }: any) => (
      <div className={styles['text']}>{children}</div>
    ),
    oList: ({ children }: any) => (
      <div className={styles['text']}>
        <ol>{children}</ol>
      </div>
    ),
    listItem: ({ children }: any) => (
      <li className={styles['text']}>{children}</li>
    ),
  }

  return (
    <>
      <div className={styles.overlay_container}>
        <div className={styles.overlay_section}>
          <div className={styles.content}>
            <div className={styles.image}>
              <Image className={styles.img} src={berita.cover.url} alt="image" layout='fill' />
            </div>
            <div className={styles.date}>
              {berita.tanggal}
            </div>
            {berita.kategori ? 
            <div className={styles.kategori}>
              Kategori: {berita.kategori}
            </div> : ""
            }
            <div className={styles.title}>
              {berita.judul}
            </div>
            <PrismicRichText field={berita.berita} components={components} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Artikel;
