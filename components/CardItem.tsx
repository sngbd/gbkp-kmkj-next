import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Cards.module.css'

function CardItem(props: any) {
  return (
    <>
      <li className={styles.cards__item}>
        <Link className={styles.cards__item__link} href={props.path}>
          <figure className={styles['cards__item__pic-wrap']} data-category={props.label}>
            <Image
              className={styles.cards__item__img}
              alt='berita'
              src={props.src}
              width="100"
              height="100"
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5 className={styles.cards__item__text}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;