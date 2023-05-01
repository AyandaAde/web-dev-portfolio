import Box from "@mui/material/Box";
import Grid2 from "@mui/material/Unstable_Grid2";
import localFont from "next/font/local";
import Card4 from "./card4";
import Card5 from "./card5";

const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const gambettaLightItalic = localFont({src:"../../public/fonts/Gambetta-LightItalic.woff2"});
const chillax = localFont({src: "../../public/fonts/Chillax-Regular.woff2"});

export default function Section4(){
    return(
        <Box>
            <Grid2 spacing={3} container sx={{justifyContent: "center", margintop:{xs:"50px", md:"0"}}}>
                <Grid2 sx={{textAlign:"center", paddingX:{sx:"0",md:"300px"}}}>
                <h1 className={`text-beige ${satoshiLight.className} text-[70px] sm:text-[96px] leading-[100%]`}> What my <span className={`${gambettaLightItalic.className}`}>clients say</span></h1>
                <p className={`${chillax.className} text-textMuted text-[15px] sm:text-[18px] leading-[160%]`}>See what my clients have to say about working with me and the results I helped them achieve</p>
                </Grid2>
                <Grid2 container spacing={3} sx={{padding:"0" , display: "flex", flexDirection: "column"}}>
                <Grid2>
                    <Card4
                    image="logo (2).svg"
                    width = {30}
                    height = {20}
                    heading = "Amazing Results with Arik’s Premium Web Design Services."
                    content = "Arik is a top-notch web designer who created a stunning website for my business. He was attentive to my needs and provided excellent customer service throughout the entire process. I highly recommend his services."
                    image2 = "/Image Wrapper (1).png"
                    clientName = "JOHN SMITH"
                    company = "ABC Company"
                    />
                </Grid2>
                <Grid2>
                    <Card4
                    image="logo7.svg"
                    width = {116.67}
                    height = {25}
                    heading = "Professional, Collaborative Web Design Experience with Arik."
                    content = "I had the pleasure of working with Arik on a website development project and was blown away by his expertise and professionalism. He made the process seamless and delivered a website that exceeded our expectations. I highly recommend Arik for all your web development needs."
                    image2 = "/Image Wrapper (3).png"
                    clientName = "Karen Lee"
                    company = "Redwood Technologies"
                    />
                </Grid2>
                <Grid2>
                    <Card4
                    image="logo (3).svg"
                    width = {52}
                    height = {20}
                    heading = "Web Design and Content Solutions: Stand Out from the Crowd."
                    content = "Arik's SEO services have helped my business improve its online presence and increase traffic to our website. He is knowledgeable, professional, and provides excellent results. I highly recommend him for all your SEO needs."
                    image2 = "/Image Wrapper (5).png"
                    clientName = "Emily Davis"
                    company = "Greenway Industries"
                    />
                </Grid2>
                    </Grid2>
               <Grid2 container spacing={3} sx={{padding:"0", display: "flex", flexDirection: "column"}}>
               <Grid2>
                    <Card5
                    image="logo (5).svg"
                    width = {23.64}
                    height = {20}
                    heading = "Expert Webflow and SEO Services: Excellent Work, Great Results."
                    content = "Working with Arik on my website redesign was a fantastic experience. He was able to take my vision and turn it into a beautiful and functional website. His attention to detail and creative approach is unmatched. I couldn't be happier with the end result."
                    image2 = "/Image Wrapper (2).png"
                    clientName = "David Kim"
                    company = "Design Inc."
                    />
                </Grid2>
                
                <Grid2>
                    <Card5
                    image="logo8.svg"
                    width = {113.14}
                    height = {30}
                    heading = "Expertise in Web Design: Second to None with Arik."
                    content = "Arik is not only an exceptional web designer, but also a pleasure to work with. He took the time to understand my business and its unique needs, and created a website that perfectly represents my brand. I highly recommend Arik's services to anyone looking for a top-quality web designer."
                    image2 = "/Image Wrapper (4).png"
                    clientName = "Andrew Thompson"
                    company = "Silverstone Corporation"
                    />
                </Grid2>
               
                <Grid2>
                    <Card5
                    image="logo9.svg"
                    width = {79.33}
                    height = {20}
                    heading = "High-Quality Web Design: Exceptional Attention to Detail with Arik."
                    content = "Arik's development services are top-notch. He is able to take complex ideas and turn them into functional, user-friendly websites. His attention to detail and commitment to customer satisfaction are unmatched. I highly recommend Arik for all your web development needs."
                    image2 = "/Image Wrapper (6).png"
                    clientName = "Ryan Chen"
                    company = "Golden Gate Solutions"
                    />
                </Grid2>
               </Grid2>                
            </Grid2>

        </Box>
    )
}