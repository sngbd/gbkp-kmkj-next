import styles from '@/styles/Cards.module.css';

const Page = ({ title, content, cardStyle = 'cards__container' }: any) => {
  return (
    <div className={styles['cards']}>
      <h1 className={styles['card-title']}>{title}</h1>
      <div className={styles[cardStyle]}>
        <div className={styles['cards__wrapper']}>{content}</div>
      </div>
    </div>
  );
};

export default Page;
