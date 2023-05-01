import Box from "@mui/material/Box";
import styles from "../styles/card4.module.css";
import Image from "next/image";
import localFont from "next/font/local";

const satoshi = localFont({src:"../../public/fonts/Satoshi-Regular.woff2"});
const satoshiLight = localFont({src:"../../public/fonts/Satoshi-Light.woff2"});
const chillax = localFont({src:"../../public/fonts/Chillax-Regular.woff2"});
export default function Card4(props: any){
    return(
        <Box>
            <div className={`${styles.div} text-beige`}>
                <Image
                src={props.image}
                width={props.width}
                height={props.height}
                alt="client logo"
                className={`mb-[30px]`}
                />
                <h3 className={`${satoshiLight.className} text-[24px] leading-[130%] tracking-[1px]`}>{props.heading}</h3>
                <p className={`${chillax.className} text-textMuted text-[16px] leading-[180%]`}>{props.content}</p>
                <div>
                <Image
                src={props.image2}
                width={60}
                height={60}
                alt="client logo"
                className={`float-left mr-[10px]`}
                />
                <h5 className={` ${satoshi.className} uppercase text-[13px] leading-[160%] tracking-[1.5px]`}>{props.clientName}</h5>
                <p className={`${chillax.className} text-textMuted text-[14px] leading-[160%]`}>{props.company}</p>
                </div>

            </div>
        </Box>
    )
}