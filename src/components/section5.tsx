import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Image from "next/image";
import localFont from "next/font/local";
import {FiTwitter} from "react-icons/fi";
import {FaInstagram} from "react-icons/fa";
import {FaDribbble} from "react-icons/fa";
import {FaBehance} from "react-icons/fa";
import styles from "../styles/section5.module.css";
import {motion} from "framer-motion";
import {fadeIn, fadeLeft, fadeRight} from "./animations";

const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const chillax = localFont({src:"../../public/fonts/Chillax-Regular.woff2"})

export default function Section5(){
    return(
        <Box>
            <Grid2 container className="text-beige" sx={{width:"100vw", justifyContent: "center"}}>
                <Grid2 container sx={{position:"relative", left:"-17%" , height:"55vw" , display: {xs:"none", md:"flex"}, flexDirection:"row"}}>
                    <motion.h1 initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1}} className={`${gambettaLightItalic.className} p-0 relative mt-[49%] left-[5%] text-[6vw]`}>Andersson</motion.h1>
                   <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}> <Image
                    src="/Andersson.png"
                    width={880}
                    height={769}
                    alt="Andersson"
                    className="mix-blend-lighten absolute width-[60%] left-[23%] top-[29px]"
                    /></motion.div>
                    <motion.h1 initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{duration:1}} className={`${satoshiLight.className} p-0 relative mt-[49%] left-[53%] text-[6vw]`}>Arik <span className={`${gambettaLightItalic.className}`}>Andersson</span></motion.h1>

                </Grid2>
                <Grid2 container sx={{position:"relative", height:"100vw", width: "100vw", textAlign: "center" , display: {xs:"block", md:"none"}, marginBottom: "40px"}}>
                <motion.h1 initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1}} className={`${satoshiLight.className} p-0 relative mt-[50px] text-[50px] sm:text-[100px]`}>Arik <span className={`${gambettaLightItalic.className}`}>Andersson</span></motion.h1>
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
                        <motion.h2 initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{duration:1}} className={`${satoshiLight.className}p-0 text-[48px] leading-[52.8px]`}>A website that leaves <span className={`${gambettaLightItalic.className}`}>a lasting impression!</span></motion.h2>
                    </Grid2>
                    <Grid2 container sx={{width:"568px"}}>
                        <Grid2>
                            <motion.p initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1}} className={`${chillax.className}p-0`}>Hi, I&apos;m Arik Andersson - a freelancer specializing in premium web design, development, and SEO services. I&apos;m passionate about creating unique and effective solutions for my clients, and I bring a personal touch to every project. Let&apos;s work together to bring your vision to life!</motion.p>
                        </Grid2>
                        <Grid2 container sx={{justifyContent:"center", width:"100%"}}>
                            <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay: 0.5 }} className="m-0 p-0"><FiTwitter className={`${styles.icon} hover:animate-bounce`} /></motion.div>
                            <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:1}} className="m-0 p-0"><FaInstagram className={`${styles.icon} hover:animate-bounce`} /></motion.div>
                            <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:1.5}} className="m-0 p-0"><FaDribbble className={`${styles.icon} hover:animate-bounce`} /></motion.div>
                            <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:2}} className="m-0 p-0"><FaBehance className={`${styles.icon} hover:animate-bounce`} /></motion.div>
                        </Grid2>
                    </Grid2>

                </Grid2>

            </Grid2>

        </Box>
    )
}