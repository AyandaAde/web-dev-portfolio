import Grid2 from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import localFont from "next/font/local";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import styles from "../styles/section2.module.css";
import CardComp from "./card";

const satoshi = localFont({ src: "../../public/fonts/Satoshi-Regular.woff2" });
const gambettaItalic = localFont({ src: "../../public/fonts/Gambetta-Italic.woff2" });

export default function Section2() {
    return (
        <Box>
            <Grid2 container sx={{ width: "80vw", margin: "50px 0 0 0" }}>
                <Grid2 container sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                    <Grid2 sx={{ display: "inline-block", width: "50%", textAlign: "left" }}> <h2 className={`inline-block ${satoshi.className} ${styles.h2}`}>Selected</h2> <h2 className={`inline-block ${gambettaItalic.className} ${styles.h2}`}>Work</h2></Grid2>
                    <Grid2 sx={{ display: "inline-block", }}> <Button variant="text" sx={{ color: "#DAC5A7" }} startIcon={<ArrowOutwardIcon sx={{ boxSizing: "border-box", background: "rgba(218, 197, 167, 0.05)", border: "1px solid rgba(218, 197, 167, 0.15)", backdropFilter: "blur(15px)", borderRadius: "500px" }} />} >See All</Button> </Grid2>
                </Grid2>
                <Grid2 container spacing={2} sx={{justifyContent:"center"}}>
                    <Grid2>
                        <CardComp
                            image = "/image (2).png"
                            title="Space"
                            buttonText="WEB DESIGN" />
                    </Grid2>
                    <Grid2>
                        <CardComp
                            image = "/image (3).png"
                            title="Nova"
                            buttonText="WEB DESIGN" />
                    </Grid2>
                    <Grid2>
                        <CardComp
                            image = "/image (4).png"
                            title="Sonic"
                            buttonText="WEB DESIGN" />
                    </Grid2>
                    <Grid2>
                        <CardComp
                            image = "/image (5).png"
                            title="Solar"
                            buttonText="WEB DESIGN" />
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}