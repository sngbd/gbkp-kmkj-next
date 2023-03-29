import styles from '@/styles/Renungan.module.css'

function Renungan({ renungan, refr, type }: any) {
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
            {
              renungan[type].map((item: any) => {
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

export default Renungan;
