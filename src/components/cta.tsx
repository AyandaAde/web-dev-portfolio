import Grid2 from "@mui/material/Unstable_Grid2";
import localFont from "next/font/local";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from 'react-bootstrap/Button';

const satoshi = localFont({src:"../../public/fonts/Satoshi-Regular.woff2"});
const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const chillax = localFont({src:"../../public/fonts/Chillax-Regular.woff2"});


export default function Cta(){
    return(
        <>
        <Grid2 container className="text-beige" sx={{textAlign:"center", justifyContent: "center", alignItems: "center", flexDirection:"column", marginTop:"15%"}}>
            <p className={`${satoshi.className} text-[13px] leading-[20.8px] tracking-[1.5px]`}>PROJECT IN MIND?</p>
            <h1 className={`${satoshiLight.className} text-[80px] lg:text-[128px] leading-[100%]`}>Let&apos;s make your <span className={`${gambettaLightItalic.className}`}>Website shine</span></h1>
            <p className={`${chillax.className}text-[20px] leading-[170%] sm:w-[500px] text-textMuted`}>Premium web design, webflow, and SEO services to help your business stand out.</p>
            <Button variant="primary" style={{background: "#DAC5A7", borderRadius: "2px", border:"1px solid #DAC5A7"}} className={`${satoshi.className} w-[164px] text-black text-[13px]`}>GET IN TOUCH <ArrowOutwardIcon/></Button>

        </Grid2>
        </>
    )
}