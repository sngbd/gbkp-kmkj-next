import styles from '@/styles/Renungan.module.css'
import { PrismicRichText } from '@prismicio/react';
import Image from 'next/image'

function Renungan({ renungan, refr, type }: any) {
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
  }

  return (
    <>
      <div className={styles.overlay_container} ref={refr}>
        <div className={styles.overlay_section}>
          <div className={styles.content}>
            <div className={styles.date}>
              {renungan.tanggal}
            </div>
            <div className={styles.title}>
              {renungan.judul}
            </div>
            <PrismicRichText field={renungan[type]} components={components} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Renungan;
