import Hero from "@/components/Hero";
import Kegiatan from "@/components/Kegiatan";
import Link from "next/link";

function Mamre() {
  return (
    <>
      <Hero
        title="Mamre"
        left="Kepengurusan"
        leftLink="/kategorial/mamre/kepengurusan"
        right="Bahan PA"
        rightLink="/kategorial/mamre/bahan-pa"
        bg="/kategorial/mamre-cover.jpg" 
      />
      <Kegiatan subheader="Mamre GBKP KMKJ" />
    </>
  )
}

export default Mamre;
