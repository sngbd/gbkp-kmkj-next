import styles from '@/styles/Document.module.css';

function Document({ document }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>Roster Khotbah</div>
        <div className={styles.subtitle}>Minggu Ketiga</div>
        <div className={styles.document}>
          {document}
        </div>
      </div>
    </>
  )
}

export default Document;
