import { Button } from "./Button";
import HeroSection from "./HeroSection";
import Page from "./Page";
import styles from '@/styles/HeroSection.module.css';
import CardStyles from '@/styles/Cards.module.css';
import Cards from "./Cards";

const Kategorial = ({ title, linkTo, kegiatan, path, cover }: any) => {
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
        image={cover}
        alt={title}
        title={title}
        button={button}
      />
      <Cards content={kegiatan} type='kegiatan' title='Kegiatan & Info' path={path} />
    </>
  );
}

export default Kategorial;
