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

const satoshi = localFont({src:"../../public/fonts/Satoshi-Regular.woff2"});

export default function Foter() {
    return (
        <>
            <Grid2 container spacing={2} sx={{marginTop:"22.5%", width:"93%", justifyContent:"space-between"}} className={`text-[13px] ${satoshi.className}`}>
                <Grid2 container sx={{ flexDirection: "column", marginRight:{xs:"0",md:"100px"}, marginBottom:"10px"}} className={`text-textMuted`}>
                    <Grid2>
                        <Image
                            src="/Logo.svg"
                            width={100}
                            height={100}
                            alt="logo"
                        />
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center", flexDirection:"row"}}>
                        <FaInstagram className={`${styles.icon}`} />
                        <Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>INSTAGRAM</Link>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                        <FiTwitter className={`${styles.icon}`} />
                        <Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>TWITTER</Link>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                        <FaDribbble className={`${styles.icon}`} />
                        <Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>DRIBBBLE</Link>
                    </Grid2>
                    <Grid2 container sx={{alignItems:"center"}}>
                        <FaBehance className={`${styles.icon}`} />
                        <Link href="#" className={`link text-[10px] sm:text-[13px] ${satoshi.className}`}>BEHANCE</Link>
                    </Grid2>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column", marginBottom:"10px" }} className={`text-textMuted`}>
                    <h4 className={`text-beige`}>Pages</h4>
                    <Link className={`link`} href="#">HOME</Link>
                    <Link className={`link`} href="#">SERVICES</Link>
                    <Link className={`link`} href="#">ABOUT</Link>
                    <Link className={`link`} href="#">CONTACT</Link>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column", marginBottom:"10px" }} className={`text-texttMuted`}>
                <h4 className={`text-beige`}>CMS</h4>
                    <Link className={`link`} href="#">WORK</Link>
                    <Link className={`link`} href="#">WORK SINGLE</Link>
                    <Link className={`link`} href="#">BLOG</Link>
                    <Link className={`link`} href="#">BLOG POST</Link>
                </Grid2>
                <Grid2 container sx={{ flexDirection: "column" }} className={`text-textMuted`}>
                <h4 className={`text-beige`}>Utility Pages</h4>
                    <Link className={`link`} href="#">404 ERROR PAGE</Link>
                    <Link className={`link`} href="#">PASSWORD PROTECTED</Link>
                    <Link className={`link`} href="#">STYLE GUIDE</Link>
                    <Link className={`link`} href="#">LICENSING</Link>
                    <Link className={`link`} href="#">CHANGELOG</Link>
                </Grid2>
            </Grid2>
            <p className={`text-[13px] ${satoshi.className} relative top-[60px] right-[36%] text-textMuted`}>&copy; {new Date().getFullYear()} Developed by Ayanda Adegbola</p>
            <Button variant="text" sx={{color: "#DAC5A7", position: "relative", left:"50%"}} href="#" className={`${styles.button} ${satoshi.className} w-[164px] text-[13px]`}>TO TOP<ArrowUpwardIcon className={`${styles.Arrow}`} /></Button>

        </>
    )
}