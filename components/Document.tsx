import styles from '@/styles/Document.module.css';

function Document({ document, title, subtitle }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.document}>
          {document}
        </div>
      </div>
    </>
  )
}

export default Document;
