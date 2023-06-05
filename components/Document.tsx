import styles from '@/styles/Document.module.css';
import FileList from './FileList';

function Document({ results, title, subtitle, type }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <FileList results={results} type={type} />
      </div>
    </>
  )
}

export default Document;
