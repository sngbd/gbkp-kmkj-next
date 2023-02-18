import styles from '@/styles/Cards.module.css';
import Link from 'next/link';
import CardItem from './CardItem';

function Cards({ content, type = 'berita', title = 'Berita', cardClass, path = '/berita' }: any) {
  return (
    <div className={`${styles.cards} ${styles[cardClass]}`}>
      <h1><Link href={path}>{title}</Link></h1>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
            {
              content.slice(0, 3).map((b: any) => {
                return <CardItem
                  src={b.data[type].filter((el: any) => el.type === 'image')[0]?.url || '/blank.jpg'}
                  text={b.data.judul}
                  label={title}
                  path={`${path}/${b.uid}`}
                  key={b.data.judul}
                />
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;