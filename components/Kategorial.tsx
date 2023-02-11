import { Button } from "./Button";
import HeroSection from "./HeroSection";
import Page from "./Page";
import styles from '@/styles/HeroSection.module.css';

const Kategorial = ({ title, linkTo }: any) => {
  const button = (
    <div className='hero-btns'>
      <Button
        className={styles['btns']}
        buttonStyle='btn--outline'
        buttonSize='btn--large'
        linkTo={`${linkTo}/kepengurusan`}
      >
        Kepengurusan
      </Button>
      <Button
        className={styles['btns']}
        buttonStyle='btn--primary'
        buttonSize='btn--large'
        linkTo={`${linkTo}/bahan-pa`}
      >
        Bahan PA
      </Button>
    </div>
  )
  return (
    <>
      <HeroSection 
        cName='hero-container kategorial'
        image='/images/gbkp-kmk.jpeg'
        alt={title}
        title={title}
        button={button}
      />
      <Page title='Kegiatan' content={
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      }
      />
      <Page title='Info' content={
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      }
      />
    </>
  );
}

export default Kategorial;
