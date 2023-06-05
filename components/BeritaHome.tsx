import styles from '@/styles/BeritaHome.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BeritaHome = ({ kategori, page, berita }: any) => {
  const currentPage = parseInt(page);
  const p = currentPage >= 1 ? (currentPage - 1) * 6 : 0;
  const pageSize = Math.ceil((berita.length - 1) / 6);
  const counter = (currentPage >= 4 && currentPage <= pageSize - 3) ? currentPage - 2 : (currentPage > pageSize - 3 ? pageSize - 4 : 1)
  if (kategori) {
    berita = berita.filter((result: any) => kategori && result.data.kategori === kategori);
  }

  return (
    <>
      <div className={styles['container']}>
        {
          berita.length > 0 &&
          <Link href={`/berita/${berita[0].uid}`} className={styles['featured']}>
            <div className={styles['featured_img_parent']}>
              <Image className={styles.img} src={berita[0].data.cover.url} width={692.91} height={297.85} alt="cover_lg" />
            </div>
            <div className={styles['text']}>
              <div className={styles['content']}>
                <div className={styles['label']}>{berita[0].data.tanggal}</div>
                <div className={styles['title']}>{berita[0].data.judul}</div>
                <div className={styles['body']}> 
                  {berita[0].data.berita[0].text.split(" ").slice(0, 10).join(" ")}...
                </div>
                <div className={styles['more']}>
                  Baca Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
                </div>
              </div>
            </div>
        </Link>
        }
        <div className={styles['cards']}>
          {
            berita.slice(1 + p, 7 + p).map((berita: any) => {
              return (
                <>
                  <Link href={`/berita/${berita.uid}`} className={styles['card']}>
                    <div className={styles['img_parent']}>
                      <Image className={styles.img} src={berita.data.cover.url} width={370} height={180} alt="cover_sm" />
                    </div>
                    <div className={styles['cardContent']}>
                      <div className={styles['label']}>{berita.data.tanggal}</div>
                      <div className={styles['cardTitle']}>{berita.data.judul}</div>
                      <div className={styles['cardBody']}> 
                        {berita.data.berita[0].text.split(" ").slice(0, 10).join(" ")}...
                      </div>
                      <div className={styles['more']}>
                        Baca Selengkapnya <Image src='/arrow.svg' alt='arrow' width={16} height={16} />
                      </div>
                    </div>
                  </Link>
                </>
              )
            })
          }
        </div>
        <div className={styles['pagination']}>
          <Link href={`/berita?page=${1}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4404 19.875L20.9385 18.3769L16.0722 13.5L20.9385 8.62312L19.4404 7.125L13.0654 13.5L19.4404 19.875Z" fill="#333333"/>
              <path d="M12.4374 19.875L13.9355 18.3769L9.0693 13.5L13.9355 8.62312L12.4374 7.125L6.06242 13.5L12.4374 19.875Z" fill="#333333"/>
            </svg>
          </Link>
          <Link href={`/berita?page=${currentPage == 1 ? currentPage : currentPage - 1}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>
            <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.75188 12.875L8.25 11.3769L3.38375 6.5L8.25 1.62312L6.75187 0.125L0.376875 6.5L6.75188 12.875Z" fill="black"/>
            </svg>
          </Link>
          {
            pageSize >= 5
            ?
              Array.from({length: 5}, (_, i) => i + counter).map((num, i) => {
                if (currentPage >= 4) {
                  if (i === 0)
                    return (<Link key={i} href={`/berita?page=1` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>1</Link>)
                  if (i === 1)
                    return (<div className={styles['square']}>...</div>)
                }
                if (currentPage <= pageSize - 3) {
                  if (i === 3)
                    return (<div className={styles['square']}>...</div>)
                  if (i === 4)
                    return (<Link key={i} href={`/berita?page=${pageSize}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>{pageSize}</Link>)
                }
                if (num === currentPage)
                  return (<div key={i} className={styles['circle_selected']}>{num}</div>)
                return (<Link key={i} href={`/berita?page=${num}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>{num}</Link>)
              }) 
            :
              Array.from({length: pageSize}, (_, i) => i + 1).map((num, i) => {
                if (num === parseInt(page))
                  return (<Link key={i} href={`/berita?page=${num}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle_selected']}>{num}</Link>)
                return (<Link key={i} href={`/berita?page=${num}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>{num}</Link>)
              })
          }
          <Link href={`/berita?page=${currentPage == pageSize ? currentPage : currentPage + 1}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5919 7.125L10.0938 8.62312L14.96 13.5L10.0938 18.3769L11.5919 19.875L17.9669 13.5L11.5919 7.125Z" fill="black"/>
            </svg>
          </Link>
          <Link href={`/berita?page=${pageSize}` + `${kategori ? `&kategori=${kategori}` : ""}`} className={styles['circle']}>
            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.30965 7.125L5.81152 8.62312L10.6778 13.5L5.81152 18.3769L7.30965 19.875L13.6846 13.5L7.30965 7.125Z" fill="black"/>
              <path d="M14.3126 7.125L12.8145 8.62312L17.6807 13.5L12.8145 18.3769L14.3126 19.875L20.6876 13.5L14.3126 7.125Z" fill="black"/>
            </svg>
          </Link>
        </div>
      </div>
    </>
  )
}

export default BeritaHome;
