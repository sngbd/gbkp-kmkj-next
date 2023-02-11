import React from 'react';
import styles from '@/styles/Cards.module.css';
import CardItem from './CardItem';

function Cards({ content }: any) {
  return (
    <div className={styles.cards}>
      <h1>Berita</h1>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
            {
              content.slice(0, 3).map((b: any) => {
                return <CardItem
                  src={b.data.berita.filter((el: any) => el.type === 'image')[0].url}
                  text={b.data.judul}
                  label='Berita'
                  path={`/berita/${b.uid}`}
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