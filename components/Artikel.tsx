import styles from '@/styles/Artikel.module.css'
import Image from 'next/image';

function Artikel({ berita, refr }: any) {
  return (
    <>
      <div className={styles.overlay_container} ref={refr}>
        <div className={styles.overlay_section}>
          <div className={styles.content}>
            <Image className={styles.img} src={berita.cover.url} alt="image" width={1088.02} height={680.89} />
            <div className={styles.date}>
              {berita.tanggal}
            </div>
            <div className={styles.title}>
              {berita.judul}
            </div>
            {
              berita.berita.map((item: any) => {
                if (item.type === "paragraph") {
                  return (
                    <>
                      <div className={styles.text}>
                        {item.text}
                      </div>
                    </>
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Artikel;
