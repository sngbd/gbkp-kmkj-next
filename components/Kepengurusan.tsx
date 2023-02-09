import Page from "./Page";
import Profile from "./Profile";
import styles from '@/styles/Cards.module.css';

const Kepengurusan = ({ title, kategorial, document }: any) => {
  return (
    <>
      <div className={styles['article']}>
        <Page title={`Kepengurusan ${title}`} content="" />
      </div>
      {
        document[0].data[kategorial].map((item: any) => <Profile key={item.nama} profile={item} />)
      }
  </>
  );
}

export default Kepengurusan;