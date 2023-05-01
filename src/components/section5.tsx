import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Image from "next/image";
import localFont from "next/font/local";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import {FaBehance} from "react-icons/fa";
import styles from "../styles/section5.module.css";

const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const chillax = localFont({src:"../../public/fonts/Chillax-Regular.woff2"})

export default function Section5(){
    return(
        <Box>
            <Grid2 container className="text-beige" sx={{width:"100vw", justifyContent: "center"}}>
                <Grid2 container sx={{position:"relative", left:"-17%" , height:"55vw" , display: {xs:"none", md:"flex"}, flexDirection:"row"}}>
                    <h1 className={`${gambettaLightItalic.className} relative mt-[49%] left-[5%] text-[6vw]`}>Andersson</h1>
                    <Image
                    src="/Andersson.png"
                    width={880}
                    height={769}
                    alt="Andersson"
                    className="mix-blend-lighten absolute width-[60%] left-[23%] top-[29px]"
                    />
                    <h1 className={`${satoshiLight.className} relative mt-[49%] left-[53%] text-[6vw]`}>Arik <span className={`${gambettaLightItalic.className}`}>Andersson</span></h1>

                </Grid2>
                <Grid2 container sx={{position:"relative", height:"100vw", width: "100vw", textAlign: "center" , display: {xs:"block", md:"none"}, marginBottom: "40px"}}>
                <h1 className={`${satoshiLight.className} relative mt-[50px] text-[50px] sm:text-[100px]`}>Arik <span className={`${gambettaLightItalic.className}`}>Andersson</span></h1>
                    <Image
                    src="/Andersson.png"
                    width={880}
                    height={769}
                    alt="Andersson"
                    className="mix-blend-lighten absolute width-[200px] -bottom-[40px]"
                    />
                </Grid2>
                <Grid2 container sx={{justifyContent: "center", marginX:"10px", textAlign:"center"}}>
                    <Grid2 sx={{width:"568px"}}>
                        <h2 className={`${satoshiLight.className} text-[48px] leading-[52.8px]`}>A website that leaves <span className={`${gambettaLightItalic.className}`}>a lasting impression!</span></h2>
                    </Grid2>
                    <Grid2 container sx={{width:"568px"}}>
                        <Grid2>
                            <p className={`${chillax.className}`}>Hi, I&apos;m Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I&apos;m passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let&apos;s work together to bring your vision to life!</p>
                        </Grid2>
                        <Grid2 container sx={{justifyContent:"center", width:"100%"}}>
                            <FiTwitter className={`${styles.icon}`} />
                            <FaInstagram className={`${styles.icon}`} />
                            <FaDribbble className={`${styles.icon}`} />
                            <FaBehance className={`${styles.icon}`} />
                        </Grid2>
                    </Grid2>

                </Grid2>

            </Grid2>

        </Box>
    )
}