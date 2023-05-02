import Grid2 from "@mui/material/Unstable_Grid2";
import localFont from "next/font/local";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from 'react-bootstrap/Button';
import {motion} from "framer-motion";
import {fadeIn} from "./animations";
import useMediaQuery from "@mui/material/useMediaQuery";

const satoshi = localFont({src:"../../public/fonts/Satoshi-Regular.woff2"});
const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const chillax = localFont({src:"../../public/fonts/Chillax-Regular.woff2"});


export default function Cta(){
    const small = useMediaQuery("(min-width:600px)");
    return(
        <>
        <Grid2 container className="text-beige" sx={{textAlign:"center", justifyContent: "center", alignItems: "center", flexDirection:"column", marginTop:"15%"}}>
            <motion.p initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:2}} className={`${satoshi.className} text-[13px] leading-[20.8px] tracking-[1.5px]`}>PROJECT IN MIND?</motion.p>
            <motion.h1 initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:2, delay:1}} className={`${satoshiLight.className} text-[80px] lg:text-[128px] leading-[100%]`}>Let&apos;s make your <span className={`${gambettaLightItalic.className}`}>Website shine</span></motion.h1>
            <motion.p initial="initial" whileInView="whileInView" variants={fadeIn} transition={small? {delay:0.5, duration:2} : {duration: 2}} className={`${chillax.className}text-[20px] leading-[170%] sm:w-[500px] text-textMuted`}>Premium web design, webflow, and SEO services to help your business stand out.</motion.p>
            <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={small? {delay:1.3, duration:2} : {duration: 2}}><Button variant="primary" style={{background: "#DAC5A7", borderRadius: "2px", border:"1px solid #DAC5A7"}} className={`${satoshi.className} w-[164px] text-black text-[13px]`}>GET IN TOUCH <ArrowOutwardIcon/></Button></motion.div>

        </Grid2>
        </>
    )
}