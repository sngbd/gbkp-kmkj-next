import Page from "./Page";
import Profile from "./Profile";
import styles from '@/styles/Cards.module.css';
import profileStyles from '@/styles/ProfileCard.module.css';

const Kepengurusan = ({ title, kategorial, document }: any) => {
  return (
    <>
      <div className={styles['article']}>
        <Page title={title} cardStyle='cards__profile' content={
          <div className={profileStyles['profiles-container']}>
            {document[0].data[kategorial].map((item: any) => <Profile key={item.nama} profile={item} />)}
          </div>
        } />
      </div>
  </>
  );
}

export default Kepengurusan;