import styles from '@/styles/ListArticles.module.css';
import Link from 'next/link';

function ListArticles({ articles, link, title }: any) {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["subtitle"]}>GBKP Klasis Medan Kutajurung</div>
        <div className={styles["list"]}>
        {
          articles.map((item: any, index: number) => {
            return (
              <Link key={index} className={styles.border} href={`${link}${item.uid}`}>
                <div className={styles.item}>{item.data.tanggal}</div>
              </Link>
            )
          })
        }
        </div>
        <div className={styles['pagination']}>
          <div className={styles['circle']}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4404 19.875L20.9385 18.3769L16.0722 13.5L20.9385 8.62312L19.4404 7.125L13.0654 13.5L19.4404 19.875Z" fill="#333333"/>
              <path d="M12.4374 19.875L13.9355 18.3769L9.0693 13.5L13.9355 8.62312L12.4374 7.125L6.06242 13.5L12.4374 19.875Z" fill="#333333"/>
            </svg>
          </div>
          <div className={styles['circle']}>
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75188 12.875L8.25 11.3769L3.38375 6.5L8.25 1.62312L6.75187 0.125L0.376875 6.5L6.75188 12.875Z" fill="black"/>
            </svg>
          </div>
          <div className={styles['circle_selected']}>1</div>
          <div className={styles['circle']}>2</div>
          <div className={styles['circle']}>3</div>
          <div className={styles['square']}>...</div>
          <div className={styles['circle']}>10</div>
          <div className={styles['circle']}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5919 7.125L10.0938 8.62312L14.96 13.5L10.0938 18.3769L11.5919 19.875L17.9669 13.5L11.5919 7.125Z" fill="black"/>
            </svg>
          </div>
          <div className={styles['circle']}>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.30965 7.125L5.81152 8.62312L10.6778 13.5L5.81152 18.3769L7.30965 19.875L13.6846 13.5L7.30965 7.125Z" fill="black"/>
              <path d="M14.3126 7.125L12.8145 8.62312L17.6807 13.5L12.8145 18.3769L14.3126 19.875L20.6876 13.5L14.3126 7.125Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListArticles;
