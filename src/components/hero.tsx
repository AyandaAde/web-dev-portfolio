import Box from "@mui/material/Box";
import Image from "next/image";
import Grid2 from "@mui/material/Unstable_Grid2";
import styles from "../styles/hero.module.css";
import localFont from "next/font/local";




const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const chillax = localFont({ src: "../../public/fonts/Chillax-Regular.woff2"});

export default function Hero() {
    return (
        <Box>
            <Grid2 container sx={{position: "relative", top: {xs:"-40px", sm:"-80px", md: "-100px", lg:"-110px"}, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Grid2>
                    <Image
                        src="/heroImage.png"
                        width={880}
                        height={769}
                        alt="hero"
                        className="w-[80vw]"
                    />
                </Grid2>
                <Grid2>
                    <h1 className={`${styles.h1} ${satoshiLight.className}`}>
                        Web Designer <span className={`${gambettaLightItalic.className}`}>& Developer</span>
                    </h1>
                </Grid2>
                <Grid2>
                    <p className={`${styles.p} ${chillax.className}`}>Premium web design, development, and SEO services to help your business stand out.</p>
                </Grid2>
            </Grid2>

        </Box>
    )

}