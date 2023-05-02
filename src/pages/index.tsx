import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar';
import Hero from '@/components/hero';
import Carousel from '@/components/carousel';
import Section1 from '@/components/section1';
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from '@/components/section5';
import Carousel2 from '@/components/carousel2';
import Cta from "@/components/cta";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })


export default function Home({heading, details}: any) {
  return (
    <main
      className={`bg-black flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <NavBar />
      <Hero/>
      <Carousel/>
      <Section1/>
      <Section2/>
      <Section3/>
      {/* <Section4/> */}
      {/* <Section5/> */}
      {/* <Carousel2/> */}
      {/* <Cta/> */}
      {/* <Footer/> */}
 
     
    </main>
  )
}
