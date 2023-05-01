import Box from "@mui/material/Box";
import styles from "../styles/card2.module.css";
import localFont from "next/font/local";

const satoshi = localFont({src: "../../public/fonts/Satoshi-Regular.woff2"});
const satoshiLight = localFont({src: "../../public/fonts/Satoshi-Light.woff2"});
const chillax = localFont({src: "../../public/fonts/Chillax-Regular.woff2"});

export default function Card2(props: any) {
    const list = [props.item1, props.item2, props.item3]
    return (
        <Box>
            <div className={`${styles.div} text-beige relative`}>
                <div className="flex justify-end">
                    <div className={`${styles.time} ${chillax.className} uppercase text-center text-[12px] leading-[120%]`}><p>{props.time}</p></div>
                </div>
                <h3 className={`${satoshi.className} text-textMuted leading-[160%] tracking-[1.5px] text-[13px]`}>{props.title}</h3>
                <h1 className={`${satoshiLight.className} uppercase text-[24px] leading-[130%] trackiing-[1px]`}>{props.heading}</h1>
                <p className={`${chillax.className} text-[16px] leading-[180%] text-textMuted`}>{props.content}</p>
                <ul className={`${chillax.className} ${styles.ul} text-[16px] leading-[180%]`}>
                    {list.map((item, index)=>
                    <li key={index} style={item !== " " ? {display: "block"} : {display:"none"}}>{item}</li>
                    )}
                </ul>
            </div>
        </Box>
    )
}