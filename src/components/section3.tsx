import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import localFont from "next/font/local";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import type { } from '@mui/lab/themeAugmentation';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from '@mui/lab/TimelineDot';
import Card2 from "./card2";
import Card3 from "./card3";
import { motion } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';

const satoshi = localFont({ src: "../../public/fonts/Satoshi-Regular.woff2" });
const satoshiLight = localFont({ src: "../../public/fonts/Satoshi-Light.woff2" });
const gambettaLightItalic = localFont({ src: "../../public/fonts/Gambetta-LightItalic.woff2" });
const chillax = localFont({ src: "../../public/fonts/Chillax-Regular.woff2" });

export default function Section3() {
    const small = useMediaQuery("(min-width: 600px)");
    const fadeUp = {
        initial: {
            opacity: 0,
            y: 50,
            rotate: 10,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            rotate: 0
        },
    }
    const fadeLeft = {
        initial: {
            opacity: 0,
            x: 100,
        },
        whileInView: {
            opacity: 1,
            x: 0,
        },
    }
    const fadeRight = {
        initial: {
            opacity: 0,
            x: -100,
        },
        whileInView: {
            opacity: 1,
            x: 0,
        },
    }
    const fadeIn = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
        },
    }
    return (
        <Box sx={{ width: { xs: "300px", md: "100%" }, display: "flex", flexDirection: "column", alignItems: "center", margin: "150px 0 0 0" }}>
            <Box sx={{ width: { xs: "300px", md: "710px" } }} className={`${satoshi.className} text-beige text-center`}>
                <motion.p initial="initial" whileInView="whileInView" variants={fadeUp} transition={{ duration: 1 }} className={`text-[13px] leading-[160%] tracking-[1.5px]`}>THE PROCESS</motion.p>
                <motion.h1 initial="initial" whileInView="whileInView" variants={fadeUp} transition={small ? { duration: 1, delay: 0.5 } : { duration: 1 }} className={`${satoshiLight.className} leading=[100%] text-[70px] sm:text-[128px] font-light`}>Your Website <span className={`${gambettaLightItalic.className} font-light`}>in 5 Steps</span></motion.h1>
                <motion.p initial="initial" whileInView="whileInView" variants={fadeUp} transition={{ duration: 1 }} className={`${chillax.className} muted-text text-[20px] leading-[170%]`}>Our process ensures that we create a website tailored to your business needs.</motion.p>
            </Box>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}><Timeline position="alternate" sx={{ display: { xs: "none", md: "block" } }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                            <ArrowDownwardIcon sx={{ color: "#dac5a7" }} />
                        </TimelineDot>
                        <TimelineConnector sx={{ width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>
                    <TimelineContent className="">
                        <div className="h-[210.5px]"></div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}><Card2
                            time="2 HOURS"
                            title="DO WE MATCH?"
                            heading="DISCOVERY CALL"
                            content="Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?"
                            item1="We get to know each other better"
                            item2="Determine how I can best assist you"
                            item3="Understand the goals you have for your website"
                        /></motion.div>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                            <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>01</p>
                        </TimelineDot>
                        <TimelineConnector sx={{ width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{ duration: 1 }}><Card2
                            time="1 WEEK"
                            title="LOREM IPSUM"
                            heading="CONCEPT & STRATEGY"
                            content="Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface."
                            item1="UX Design"
                            item2="Wireframes"
                            item3="Interactive Prototype"
                        /></motion.div>

                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}><TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>02</p>
                        </TimelineDot></motion.div>
                        <TimelineConnector sx={{ width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}><Card2
                            time="1 WEEK"
                            title="SOME MAGIC"
                            heading="WEB DESIGN"
                            content="Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience."
                            item1="High-end web design tailored to your brand"
                            item2="Interactive prototype of the design"
                            item3=" "
                        /></motion.div>

                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}><TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                            <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>03</p>
                        </TimelineDot></motion.div>
                        <TimelineConnector sx={{ width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{ duration: 1 }}> <Card2
                            time="2 WEEKS"
                            title="MORE MAGIC"
                            heading="DEVELOPMENT"
                            content="In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.?"
                            item1="Custom framer website"
                            item2="Modular web design systems"
                            item3="CMS integration"
                        /></motion.div>

                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}><TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                            <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>04</p>
                        </TimelineDot></motion.div>
                        <TimelineConnector sx={{ width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}> <Card2
                            time="2 HOURS"
                            title="READY TO GO"
                            heading="WEBSITE ONBOARDING"
                            content="In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that."
                            item1="Personal workshop"
                            item2="Personalized video tutorials"
                            item3="Edit text and images directly on your website"
                        /></motion.div>

                    </TimelineOppositeContent>
                    <TimelineSeparator>
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeIn} transition={{duration:1}}> <TimelineDot sx={{ background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }} variant="outlined">
                            <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>05</p>
                        </TimelineDot></motion.div>
                        <TimelineConnector sx={{ width: "0px", background: "rgba(218, 197, 167, 0.15)" }} />
                    </TimelineSeparator>

                    <TimelineContent></TimelineContent>
                </TimelineItem>
            </Timeline></motion.div>
            <Grid2 container spacing={2} sx={{ position: "relative", display: { md: "none" } }}>
                <Grid2 sx={{ width: { xs: "100vw", sm: "80vw" }, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ position: "relative", marginBottom: "10px", background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }}>
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>01</p>
                    </div>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}><Card3
                        time="2 HOURS"
                        title="DO WE MATCH?"
                        heading="DISCOVERY CALL"
                        content="Before we start, we determine if and how I can help you. What are your requirements for your new website? Why do you need a new website? What goals do you have, and what problems can we solve with a new website?"
                        item1="We get to know each other better"
                        item2="Determine how I can best assist you"
                        item3="Understand the goals you have for your website"
                    /></motion.div>
                </Grid2>
                <Grid2 sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <div style={{ position: "relative", marginBottom: "10px", background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }}>
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>02</p>
                    </div>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{ duration: 1 }}><Card3
                        time="1 WEEK"
                        title="LOREM IPSUM"
                        heading="CONCEPT & STRATEGY"
                        content="Together, we develop a strategy that successfully combines your goals with the needs of your target audience. Based on this concept, I create the first wireframes and an interactive prototype. This provides us with a very good impression of the website and the user interface."
                        item1="UX Design"
                        item2="Wireframes"
                        item3="Interactive Prototype"
                    /></motion.div>
                </Grid2>
                <Grid2 sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <div style={{ position: "relative", marginBottom: "10px", background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }}>
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>03</p>
                    </div>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}><Card3
                        time="1 WEEK"
                        title="SOME MAGIC"
                        heading="WEB DESIGN"
                        content="Now comes the magic. Based on the previously developed concept, I create a high-end screen design perfectly tailored to your brand. A web design that sets you apart from your competition, fits your target audience ideally, and provides an excellent user experience."
                        item1="High-end web design tailored to your brand"
                        item2="Interactive prototype of the design"
                        item3=" "
                    /></motion.div>
                </Grid2>
                <Grid2 sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <div style={{ position: "relative", marginBottom: "10px", background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }}>
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>04</p>
                    </div>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeRight} transition={{ duration: 1 }}><Card3
                        time="2 WEEKS"
                        title="MORE MAGIC"
                        heading="DEVELOPMENT"
                        content="In this step, we breathe life into your new high-end design. You will receive a custom-built website using a modular web design system and CMS integration. Animations will add the necessary flair to your site and set you apart from the boring competition.?"
                        item1="Custom framer website"
                        item2="Modular web design systems"
                        item3="CMS integration"
                    /></motion.div>
                </Grid2>
                <Grid2 sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <div style={{ position: "relative", marginBottom: "10px", background: "rgba(218, 197, 167, 0.05)", width: "40px", height: "40px", border: "1px solid rgba(218, 197, 167, 0.15)", borderRadius: "500px", padding: " 8px 8px" }}>
                        <p className={`${satoshi.className} text=[13px] tracking-[1.5px] text-beige`}>05</p>
                    </div>
                    <div style={{ height: "40px", marginBottom: "10px", width: "1px", background: "rgba(218, 197, 167, 0.15)" }} />
                    <motion.div initial="initial" whileInView="whileInView" variants={fadeLeft} transition={{ duration: 1 }}><Card3
                        time="2 HOURS"
                        title="READY TO GO"
                        heading="WEBSITE ONBOARDING"
                        content="In a personal Framer workshop, I will show you how to make changes to your new website quickly and easily. Additionally, you will receive personalized Framer video tutorials that you can access at any time. Edit your Framer website without a complicated backend or the need for an additional programmer. It's as simple as that."
                        item1="Personal workshop"
                        item2="Personalized video tutorials"
                        item3="Edit text and images directly on your website"
                    /></motion.div>
                </Grid2>
            </Grid2>
        </Box>

    )
}