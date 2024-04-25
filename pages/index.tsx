import { createClient } from '@/prismicio'
import Berita from '@/components/Berita';
import Mingguan from '@/components/Mingguan';
import Personalia from '@/components/Personalia';
import Info from '@/components/Info';
import HeroHome from '@/components/HeroHome';
import { useEffect, useRef, useState } from "react";

export function useIsVisible(ref: any) {
    const [isIntersecting, setIntersecting] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          setIntersecting(entry.isIntersecting)
      } 
      );
      
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, [ref]);
  
    return isIntersecting;
  }


const Home = ({ berita, bpmk, info, beritaDesc, renungan }: any) => {
    const ref1 = useRef();
    const isVisible1 = useIsVisible(ref1);

    const ref2 = useRef();
    const isVisible2 = useIsVisible(ref2);

    const ref3 = useRef();
    const isVisible3 = useIsVisible(ref3);

    const ref4 = useRef();
    const isVisible4 = useIsVisible(ref4);

    const ref5 = useRef();
    const isVisible5 = useIsVisible(ref5);

    const [hasBeenVisible1, setHasBeenVisible1] = useState(false);
    const [hasBeenVisible2, setHasBeenVisible2] = useState(false);
    const [hasBeenVisible3, setHasBeenVisible3] = useState(false);
    const [hasBeenVisible4, setHasBeenVisible4] = useState(false);
    const [hasBeenVisible5, setHasBeenVisible5] = useState(false);

    useEffect(() => {
      if (isVisible1) {
        setHasBeenVisible1(true);
      }
    }, [isVisible1]);

    useEffect(() => {
      if (isVisible2) {
        setHasBeenVisible2(true);
      }
    }, [isVisible2]);

    useEffect(() => {
      if (isVisible3) {
        setHasBeenVisible3(true);
      }
    }, [isVisible3]);

    useEffect(() => {
      if (isVisible4) {
        setHasBeenVisible4(true);
      }
    }, [isVisible4]);

    useEffect(() => {
      if (isVisible5) {
        setHasBeenVisible5(true);
      }
    }, [isVisible5]);

  return ( 
    <>
      <HeroHome ref={ref1} className={`transition-opacity ease-out duration-700 ${hasBeenVisible1 ? "opacity-100" : "opacity-0"}`} title="GBKP Klasis Medan Kutajurung" left="Hubungi Kami" right="Lokasi Kantor" />
      <Info ref={ref2} className={`transition-opacity ease-in duration-700 ${hasBeenVisible2 ? "opacity-100" : "opacity-0"}`} results={info.results[0].data.info} />
      <Berita ref={ref3} className={`transition-opacity ease-in duration-700 ${hasBeenVisible3 ? "opacity-100" : "opacity-0"}`} berita={berita.results.slice(0, 3)} beritaDesc={beritaDesc.results} />
      <Mingguan ref={ref4} className={`transition-opacity ease-in duration-700 ${hasBeenVisible4 ? "opacity-100" : "opacity-0"}`} renungan={renungan.results} />
      <Personalia ref={ref5} className={`transition-opacity ease-in duration-700 ${hasBeenVisible5 ? "opacity-100" : "opacity-0"}`} bpmk={bpmk.results[0].data.bpmk} />
    </>
  );
}

export async function getServerSideProps() {
  const client = createClient()

  const berita = await client.getByType('berita')
  const beritaDesc = await client.getByType('berita_desc')
  const bpmk = await client.getByType('bpm')
  const info = await client.getByType('info_statistik')
  const renungan = await client.getByType('bahan_renungan')

  return {
    props: { berita, bpmk, info, beritaDesc, renungan }
  }
}

export default Home