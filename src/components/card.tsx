import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import localFont from "next/font/local";
import styles from "../styles/card.module.css";

const satoshi = localFont({ src: "../../public/fonts/Satoshi-Regular.woff2"});
const satoshiLight = localFont({src: "../../public/fonts/Satoshi-Light.woff2"});
export default function CardComp(props: any) {
  return (
    <Card sx={{width:{xs:"270px", sm:"300px", lg: "520px"}, position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={props.image}
      />
      <CardActions className='backdrop' sx={{width: "95%", position: "absolute", left: "2.5%", height: "55px", bottom: "12px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", gap: "32px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.15)", borderRadius: "2px" }}>
        <h4 className={`${styles.h4} ${satoshiLight.className} text-beige`}>{props.title}</h4>
        <Button href="#" className={`hover:text-[#dac5a7] hover:bg-transparent ${satoshi.className}`} sx={{color: "#dac5a7"}}>{props.buttonText}</Button>
      </CardActions>
    </Card>
  );
}