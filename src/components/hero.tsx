import Box from "@mui/material/Box";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2";
import styles from "../styles/hero.module.css";
import localFont from "next/font/local";
import {motion} from "framer-motion";



const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const chillax = localFont({ src: "../../public/fonts/Chillax-Regular.woff2"});

export default function Hero() {
    return (
        <Box>
            <Grid2 container sx={{position: "relative", top: {xs:"-40px", sm:"-80px", md: "-100px", lg:"-110px"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Grid2>
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:1}} className="p-0"><Image
                        src="/heroImage.png"
                        width={880}
                        height={769}
                        alt="hero"
                        className="w-[80vw]"
                    /></motion.div>
                </Grid2>
                <Grid2>
                    <motion.h1 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className={`${styles.h1} ${satoshiLight.className} p-0`}>
                        Web Designer <span className={`${gambettaLightItalic.className}`}>& Developer</span>
                    </motion.h1>
                </Grid2>
                <Grid2>
                    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2}} className={`${styles.p} ${chillax.className}`}>Premium web design, development, and SEO services to help your business stand out.</motion.p>
                </Grid2>
            </Grid2>

        </Box>
    )

}