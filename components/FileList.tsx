import styles from '@/styles/Overlay.module.css';
import Link from 'next/link';

function FileList({ results, type }: any) {
  return (
    <>
      <div className={styles.container}>
        <iframe src={results[0].data.files[0][type]?.url ?? "#"} width="1194" height="849" title={type}/>
        <h1 className={styles.title}><b>File Lainnya</b></h1>
        <div className={styles.list}>
          {
            results[0].data.files.slice(1).map((item: any) => {
              return (
                <>
                  <Link className={styles.border} href={item[type]?.url ?? "#"} rel='noopener noreferrer' target='_blank' download>
                    <div className={styles.item}>{item[type]?.name}</div>
                  </Link>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default FileList;
