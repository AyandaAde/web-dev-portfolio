import Grid2 from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import styles from "../styles/footer.module.css";
import localFont from "next/font/local";
import Link from "next/link";
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {motion} from "framer-motion";
import {fadeIn, fadeRight} from "./animations";

const satoshi = localFont({src:"../../public/fonts/Satoshi-Regular.woff2"});

export default function Foter() {
    return (
        <>
            <Grid2 container spacing={2} sx={{marginTop:"22.5%", width:"93%", justifyContent:"space-between"}} className={`text-[13px] ${satoshi.className}`}>
                <Grid2 container sx={{ flexDirection: "column", marginRight:{xs:"0",md:"100px"}, marginBottom:"10px"}} className={`text-textMuted`}>
                    <Grid2>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}><Image
                            src="/Logo.svg"
                            width={100}
                            height={100}
                            alt="logo"
                        /></motion.div>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center", flexDirection:"row"}}>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.3}}><FaInstagram className={`${styles.icon}`} /></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.3}}><Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>INSTAGRAM</Link></motion.div>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.4}}><FiTwitter className={`${styles.icon}`} /></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.4}}><Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>TWITTER</Link></motion.div>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.5}}><FaDribbble className={`${styles.icon}`} /></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.5}}><Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>DRIBBBLE</Link></motion.div>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.6}}><FaBehance className={`${styles.icon}`} /></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.6}}><Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>BEHANCE</Link></motion.div>
                    </Grid2>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column", marginBottom:"10px" }} className={`text-textMuted`}>
                    <motion.h4 initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}  className={`text-beige`}>Pages</motion.h4>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.3}}><Link className={`link`} href="#">HOME</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.4}}><Link className={`link`} href="#">SERVICES</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.5}}><Link className={`link`} href="#">ABOUT</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.6}}><Link className={`link`} href="#">CONTACT</Link></motion.div>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column", marginBottom:"10px" }} className={`text-texttMuted`}>
                <motion.h4 initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}  className={`text-beige`}>CMS</motion.h4>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.3}}><Link className={`link`} href="#">WORK</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.4}}><Link className={`link`} href="#">WORK SINGLE</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.5}}><Link className={`link`} href="#">BLOG</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.6}}><Link className={`link`} href="#">BLOG POST</Link></motion.div>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column" }} className={`text-textMuted`}>
                <motion.h4 initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}  className={`text-beige`}>Utility Pages</motion.h4>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.3}}><Link className={`link`} href="#">404 ERROR PAGE</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.4}}><Link className={`link`} href="#">PASSWORD PROTECTED</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.5}}><Link className={`link`} href="#">STYLE GUIDE</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.6}}><Link className={`link`} href="#">LICENSING</Link></motion.div>
                    <motion.div initial={{opacity:0, x:-50}} whileInView="whileInView" variants={fadeRight} transition={{duration:1, delay:0.7}}><Link className={`link`} href="#">CHANGELOG</Link></motion.div>
                </Grid2>
            </Grid2>
            <motion.p initial="initial" whileInView="whileInView" variants={fadeIn} transition={{delay:1, duration:1}} className={`text-[13px] ${satoshi.className} relative top-[60px] right-[36%] text-textMuted`}>&copy; {new Date().getFullYear()} Developed by Ayanda Kinyambo</motion.p>
            <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{delay:1, duration:1}} style={{position: "relative", left:"50%"}} ><Button variant="text" sx={{color: "#DAC5A7"}} href="#" className={`${styles.button} ${satoshi.className} w-[164px] text-[13px]`} endIcon={<ArrowUpwardIcon sx={{ boxSizing: "border-box", background: "rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", backdropFilter: "blur(15px)", borderRadius: "500px" }} /> } >TO TOP</Button></motion.div>

        </>
    )
}
