import styles from '@/styles/HeroSection.module.css';
import Image from 'next/image';

const HeroSection = (arg: any) => {
  let { cName, image, alt, title, desc, button } = arg;
  
  return (
    <div className={cName.split(" ").map((c: any) => styles[c]).join(" ")}>
      <Image
        src={image}
        alt={alt} 
        width='1600'
        height='1200'
      />
      <h1>{title}</h1>
      <p>{desc}</p>
      {button}
    </div>
  );
}

export default HeroSection;