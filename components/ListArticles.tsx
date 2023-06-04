import styles from '@/styles/ListArticles.module.css';
import Link from 'next/link';
import { useState } from 'react';

function setDefaultMonth() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  let monthStr = String(month);
  if (month < 10) {
    monthStr = "0" + month;
  }
  const defaultValue = year + "-" + monthStr;
  return defaultValue;
}

function ListArticles({ articles, link, title }: any) {
  const [month, setMonth] = useState(setDefaultMonth());
  const filteredArticles = articles.filter((item: any) => item.data.tanggal?.slice(0, -3) == month);
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["title"]}>{title}</div>
        <div className={styles["subtitle"]}>GBKP Klasis Medan Kutajurung</div>
        <input className={styles.month} type="month" defaultValue={month} onChange={e => setMonth(e.target.value)} />
        <div className={styles["list"]}>
        {
          filteredArticles.length == 0 ? <div className={styles.item}>Tidak ada artikel</div> :
          filteredArticles.map((item: any, index: number) => {
            return (
              <>
                <Link key={index} className={styles.border} href={`${link}${item.uid}`}>
                  <div className={styles.item}>{item.data.judul}</div>
                </Link>
              </>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default ListArticles;
