import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from "../styles/section1.module.css";
import localFont from "next/font/local";
import {motion} from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';

const satoshi = localFont ({ src: "../../public/fonts/Satoshi-Regular.woff2"});
const chillax = localFont ({ src: "../../public/fonts/Chillax-Regular.woff2"});
export default function Section1() {
    const small = useMediaQuery('(min-width:600px)');
    const variants =  {
        initial: {
            opacity: 0,
            x:"-10vw",   
        },
        animate:{
            opacity:1,
            x:0,
        },
    }
    return (
        <Box>
            <Grid2 container sx={{margin: "50px 0 0 0", width: "100%", gap: "20px"}}>
            <motion.div initial="initial" whileInView="animate" variants={variants} transition={{duration:1}}><Grid2 sx={{ display: "flex", flexDirection: "column" , justifyContent: "center", alignItems: "flex-start", padding: "0 48px", width:{xs:"300px",md:"350px"}, height: "331px", background:"rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "2px", flexGrow:1,}}>
                    <p className={`${satoshi.className} ${styles.p}`}>01</p>
                    <h4 className={`${satoshi.className} ${styles.h4}`}>WEB DESIGN</h4>
                    <p className={`${chillax.className} ${styles.p2}`}>Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.</p>
                    <Button variant="text" sx={{color: "#DAC5A7", fontSize: "13px", lineHeight: "160%",}} startIcon = {<ArrowOutwardIcon sx={{boxSizing: "border-box", padding: "4px 6px", width: "32px", height: "32px", background: "rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", backdropFilter: "blur(15px)", borderRadius: "500px", }} />}> ABOUT WEB DESIGN</Button>
                </Grid2></motion.div>
                <motion.div initial="initial" whileInView="animate" variants={variants} transition={small ? {duration:1, delay:0.5} : {duration:1, delay:0}}><Grid2 sx={{ display: "flex", flexDirection: "column" , justifyContent: "center", alignItems: "flex-start", padding: "0 48px", width:{xs:"300px",md:"350px"}, height: "331px", background:"rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "2px", flexGrow:1,}}>
                    <p className={`${satoshi.className} ${styles.p}`}>02</p>
                    <h4 className={`${satoshi.className} ${styles.h4}`}>NEXT JS</h4>
                    <p className={`${chillax.className} ${styles.p2}`}>Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.</p>
                    <Button variant="text" sx={{color: "#DAC5A7", fontSize: "13px", lineHeight: "160%",}} startIcon = {<ArrowOutwardIcon sx={{boxSizing: "border-box", padding: "4px 6px", width: "32px", height: "32px", background: "rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", backdropFilter: "blur(15px)", borderRadius: "500px", }} />}> ABOUT NEXT JS</Button>
                </Grid2></motion.div>
               <motion.div initial="initial" whileInView="animate" variants={variants} transition={small ? {duration:1, delay:1} : {duration: 1, delay:0}}> <Grid2 sx={{ display: "flex", flexDirection: "column" , justifyContent: "center", alignItems: "flex-start", padding: "0 48px", width:{xs:"300px",md:"350px"}, height: "331px", background:"rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "2px", flexGrow:1,}}>
                    <p className={`${satoshi.className} ${styles.p}`}>03</p>
                    <h4 className={`${satoshi.className} ${styles.h4}`}>CONTENT & SEO</h4>
                    <p className={`${chillax.className} ${styles.p2}`}>Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.</p>
                    <Button variant="text" sx={{color: "#DAC5A7", fontSize: "13px", lineHeight: "160%",}} startIcon = {<ArrowOutwardIcon sx={{boxSizing: "border-box", padding: "4px 6px", width: "32px", height: "32px", background: "rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", backdropFilter: "blur(15px)", borderRadius: "500px", }} />}> ABOUT SEO</Button>
                </Grid2></motion.div>
            </Grid2>

        </Box >
    );
};