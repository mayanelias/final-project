import React from 'react';
import style from "./footer.module.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
const Footer = () => {
    return (
        <div>
<div className={style.bgFooter}>
<img className={style.logoFooter} src="https://i.ibb.co/BGgPSbV/Elias-Music-Live-Shows-logos-transparent.png"/>
<h2 className={style.footerName}>EliasMusic&LiveShows</h2><br/>
<h2 className={style.footerRights}>©2022 EliasMusic&LiveShows, Inc. All rights reserved.</h2>
<div className={style.iconsFooter}> <AiFillInstagram/>   <FaFacebook/>  <AiFillTwitterCircle/>  <IoLogoTiktok/></div> 
    </div>   
        </div>
    );
};

export default Footer;